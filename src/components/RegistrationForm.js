import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./regForm.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
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
    localStorage.setItem("registrationData", JSON.stringify(formData));
    navigate("/login");
  };

  return (
    <div className="registration">
      <div className="registration-card">
        <h1 className="registration-card__title">Create your account</h1>
        <form className="registration-card__form" onSubmit={handleSubmit}>
          <div className="registration-card__group">
            <label className="registration-card__label">Name:</label>
            <input
              type="text"
              name="name"
              className="registration-card__input"
              placeholder="Enter"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="registration-card__group">
            <label className="registration-card__label">Email:</label>
            <input
              type="email"
              name="email"
              className="registration-card__input"
              placeholder="Enter"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="registration-card__group">
            <label className="registration-card__label">Password:</label>
            <input
              type="password"
              name="password"
              className="registration-card__input"
              placeholder="Enter"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="registration-card__submit-btn">
            Create Account
          </button>
        </form>
        <div className="registration-card__login-link">
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
