import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import { ProductDetail } from "./components/ProductDetail";
import { getProducts } from "./services/ProductService";
import SearchBar from "./components/SearchBar";
import Billing from "./components/Billing";

function App() {
  const [products, setProducts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    }
  };

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Load logged-in user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setLoggedInUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <Router>
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <SearchBar setProducts={setProducts} />
              {/* Show AddProduct only for SELLER */}
              {loggedInUser && loggedInUser.role?.toUpperCase() === "SELLER" && (
                <AddProduct onAdd={fetchProducts} />
              )}
              <ProductList products={products} />
            </>
          }
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetail loggedInUser={loggedInUser} />}
        />

        {/* Billing */}
        <Route
          path="/billing"
          element={<Billing loggedInUser={loggedInUser} />}
        />

        {/* Other routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
