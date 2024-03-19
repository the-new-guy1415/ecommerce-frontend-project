import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registrationData = JSON.parse(
      localStorage.getItem("registrationData")
    );
    console.log("Stored Registration Data:", registrationData);
    console.log("Form Data:", formData);
    if (
      registrationData &&
      registrationData.email === formData.email &&
      registrationData.password === formData.password &&
      registrationData.name === formData.name
    ) {
      navigate("/category");
    } else {
      alert("Invalid email, name, or password. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h1 className="login-card__title">Login</h1>
        <h2>Welcome back to ECOMMERCE</h2>
        <h3>The next gen business marketplace</h3>
        <form onSubmit={handleSubmit}>
          {" "}
          <div className="login-card__group">
            <label className="login-card__label">Name:</label>
            <input
              type="text"
              name="name"
              className="login-card__input"
              placeholder="Enter"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="login-card__group">
            <label className="login-card__label">Email:</label>
            <input
              type="email"
              name="email"
              className="login-card__input"
              placeholder="Enter"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="login-card__group">
            <label className="login-card__label">Password:</label>
            <input
              type="password"
              name="password"
              className="login-card__input"
              placeholder="Enter"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login-card__submit-btn">
            Login
          </button>
        </form>
        <div className="login-card__register-link">
          <Link to="/">Don't have an account? Register now</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
