import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Billing.css";

function Billing({ loggedInUser }) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
    const sum = savedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(sum);
  }, []);

  const handleLogin = () => {
    navigate("/login", { state: { fromBilling: true } });
  };

  const handleGPay = () => {
    alert(`Proceed to pay Rs. ${total} through GPay`);
  };

  return (
    <div className="billing-container">
      {!loggedInUser && (
        <div className="login-warning">
          <p>Login to save your cart history</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.productId} className="cart-card">
              <img src={item.imageUrl} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: Rs. {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="billing-footer">
          <h2>Total: Rs. {total}</h2>
          <button className="gpay-button" onClick={handleGPay}>
             G-Pay
          </button>
        </div>
      )}
    </div>
  );
}

export default Billing;
