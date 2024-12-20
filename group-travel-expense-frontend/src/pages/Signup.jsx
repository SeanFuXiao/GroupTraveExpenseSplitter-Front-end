import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";
import "../styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
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

    if (formData.password !== formData.passwordConf) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await signup({
        username: formData.username,
        password: formData.password,
      });

      if (response.error) {
        setErrorMessage(response.error);
      } else {
        navigate("/signin");
      }
    } catch (error) {
      console.error("Signup Error Debug:", error);
      setErrorMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-page">
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
              <a href="/signin">Sign In</a>
            </li>
            <li>
              <a href="/">HOME</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="signup-page-content">
        <p class="description-text">
          The best memories are made when you’re traveling together.
        </p>
        <h2>Sign Up</h2>
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
          <div className="form-group">
            <label htmlFor="passwordConf">Confirm Password:</label>
            <input
              type="password"
              id="passwordConf"
              name="passwordConf"
              value={formData.passwordConf}
              onChange={handleChange}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/signin" class="signin-link">
            Sign In
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

export default Signup;
