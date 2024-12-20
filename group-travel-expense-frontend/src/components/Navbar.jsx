import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, logout } from "../services/authService";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img
          src="/src/assets/images/logo.png"
          alt="Group Travel Logo"
          className="logo-image"
        />
        <span className="logo-title">Group Travel Expense Splitter</span>
      </Link>
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
