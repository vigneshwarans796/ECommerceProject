import { useState } from "react";
import { searchByMail } from "../../services/ProductService";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

function Login({ setLoggedInUser }) {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await searchByMail(login.email, login.password);
      if (response.data) {
        alert("✅ Logged in successfully!");
        localStorage.setItem("user", JSON.stringify(response.data));
        setLoggedInUser(response.data);

        // Redirect after login
        const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
        localStorage.removeItem("redirectAfterLogin");
        navigate(redirectPath);
      } else {
        alert("❌ Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Login failed due to server error");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-inner-container">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={login.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={login.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
