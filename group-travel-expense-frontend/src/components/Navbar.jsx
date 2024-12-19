import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, logout } from "../services/authService";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  useEffect(() => {
    const interval = setInterval(() => {
      const token = getToken();
      setIsLoggedIn(!!token);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <nav>
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
