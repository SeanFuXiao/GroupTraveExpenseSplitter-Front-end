import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "../styles/signin.css";
import "../styles/navbar.css";

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="signin-page">
      <header className="navbar">
        <div className="logo-container">
          <img
            src="/src/assets/images/logo.png"
            alt="Group Travel Logo"
            className="logo-image"
          />
          <span className="logo-title">Group Travel Expense Splitter</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/">HOME</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="signin-page-content">
        <p class="description-text">
          Travel far, travel together, and split the costs easily.
        </p>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/signup" class="signup-link">
            Sign Up
          </a>
        </p>
      </div>

      <footer className="footer">
        <p
          style={{
            marginBottom: "10px",
            fontSize: "0.9rem",
            fontFamily: "Arial, sans-serif",
            color: "#ffffff",
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
          }}
        >
          &copy; 2024 Group Travel Expense Splitter. Authors: Sean and Nowra.
        </p>
        <ul>
          <a href="mailto:seanfuxiao@gmail.com?subject=Contact%20Us&body=Hi%20Sean%20and%20Nowra,">
            Contact Us
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Signin;
