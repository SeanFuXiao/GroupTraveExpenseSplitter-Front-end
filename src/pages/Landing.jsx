import React from "react";
import { Link } from "react-router-dom";
import travelImage from "../assets/travel.jpg";

const Landing = () => {
  return (
  <div className="landing-page">
    <h1>Welcome to Group Travel Expenses Splitter</h1>
    <p>Track and split your travel expenses with friends and family easily!</p>
    <div>
    <div className="image-container">
        <img src="/assets/trave.jpg" alt="Travel" className="landing-image" />
      </div>
      <Link to="/signin" className="btn">Sign In</Link>
      <Link to="/signup" className="btn">Sign Up</Link>
    </div>
  </div>
  );
};

export default Landing;
