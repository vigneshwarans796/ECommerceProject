import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/ProductService";
import "./ProductDetail.css";

export const ProductDetail = ({ loggedInUser }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState(0);

  // Load product details and initialize cart
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);

        // Load cart quantity for this product from localStorage
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const existing = cartItems.find(item => item.productId === response.data.id);
        if (existing) setCart(existing.quantity);

      } catch (err) {
        alert("Product not found");
      }
    };
    fetch();
  }, [id]);

  // Update cart in localStorage
  const updateCartInStorage = (newQuantity) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existing = cartItems.find(item => item.productId === product.id);

    if (existing) {
      existing.quantity = newQuantity;
      if (newQuantity === 0) {
        const index = cartItems.findIndex(item => item.productId === product.id);
        cartItems.splice(index, 1);
      }
    } else if (newQuantity > 0) {
      cartItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: newQuantity,
        imageUrl: product.imageUrl,
        description: product.description
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const incrementCart = () => {
    const newQuantity = cart + 1;
    setCart(newQuantity);
    updateCartInStorage(newQuantity);
  };

  const decrementCart = () => {
    if (cart > 0) {
      const newQuantity = cart - 1;
      setCart(newQuantity);
      updateCartInStorage(newQuantity);
    }
  };

  // Handle Buy Now click
  const handleBuyNow = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    localStorage.setItem("cartMoney", total);

    // If user not logged in, remember redirect
    if (!loggedInUser) {
      localStorage.setItem("redirectAfterLogin", "/billing");
    }
  };

  return (
    <div className="product-container1">
      <div className="image-part">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
      </div>

      <div className="details-part">
        <div className="inner-div">
          <p className="name">{product.name}</p>
          <p className="description">{product.description}</p>
          <p className="price">Rs. {product.price}</p>
          <p className="availability">Stock: {product.quantity}</p>
        </div>

        <div className="buttons-part">
          <div className="outer">
            <Link to="/billing" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </Link>
          </div>

          <div className="addToCart">
            <button onClick={decrementCart}>-</button>
            <button>{cart} Cart</button>
            <button onClick={incrementCart}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
