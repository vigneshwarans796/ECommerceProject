import { useState } from "react";
import { addUser } from "../../services/ProductService";
import { useNavigate } from "react-router-dom";
import "./Register.css"
function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER", 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(user);
      alert("✅ Registered successfully!");
      navigate("/login"); 
      setUser({ name: "", email: "", password: "", role: "USER" });
    } catch (error) {
      console.error(error);
      alert("❌ Registration failed!");
        setUser({ name: "", email: "", password: "", role: "USER" });
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-innner-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <br />
        <select name="role" value={user.role} onChange={handleChange}>
          <option value="USER">User</option>
          <option value="SELLER">SELLER</option>
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
