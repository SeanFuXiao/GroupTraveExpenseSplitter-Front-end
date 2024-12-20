import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
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
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="landing-page-content">
        <h1>Welcome to Group Travel Expense Splitter</h1>
        <hr />
        <br />
        <p class="description-text">
          - Sharing expenses, sharing adventures, and making memories.
        </p>
        <br />
        <br />
        <div>
          <Link to="/signin" className="btn">
            Sign In
          </Link>
          <Link to="/signup" className="btn">
            Sign Up
          </Link>
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
              &copy; 2024 Group Travel Expense Splitter. Authors: Sean and
              Nowra.
            </p>
            <ul>
              <a href="mailto:seanfuxiao@gmail.com?subject=Contact%20Us&body=Hi%20Sean%20and%20Nowra,">
                Contact Us
              </a>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Landing;
