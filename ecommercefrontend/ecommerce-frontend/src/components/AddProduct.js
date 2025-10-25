import React, { useState } from "react";
import { addProduct } from "../services/ProductService";
import "./AddProduct.css";
const AddProduct = ({onAdd}) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(product);
      alert("✅ Product added successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        quantity: "",
        imageUrl: "",
      });
      onAdd();
    } catch (error) {
      console.error("❌ Error adding product:", error);
      alert("Failed to add product!");
    }
  };

  return (
    <>
    <h1 style={{textAlign:"center"}}> E-Commerce Dashboard</h1>
      <br></br>
      <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={product.imageUrl}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Add Product
        </button>
      </form>
    </div>
    <br></br>
    <br></br>

    </>
      );
};

export default AddProduct;
