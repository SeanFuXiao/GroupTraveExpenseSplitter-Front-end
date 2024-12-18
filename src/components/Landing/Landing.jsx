import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
  <div className="landing-page">
    <h1>Welcome to Group Travel Expenses Splitter</h1>
    <p>Track and split your travel expenses with friends and family easily!</p>
    <div>
      <Link to="/signin" className="btn">Sign In</Link>
      <Link to="/signup" className="btn">Sign Up</Link>
    </div>
  </div>
  );
};

export default Landing;
