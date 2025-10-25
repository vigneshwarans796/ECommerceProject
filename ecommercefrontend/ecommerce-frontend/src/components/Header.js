import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header({loggedInUser,setLoggedInUser}) {
  const navigate=useNavigate();
  const handleLogout=(e)=>{
    localStorage.removeItem("user");
    setLoggedInUser(null);
    navigate("/login");

      }
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShopEasy</Link>
      </div>
      

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/register">Register</Link>
        {loggedInUser ?(
          <a onClick={handleLogout}>Logout</a>
        ):(
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
