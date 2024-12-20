import React, { useEffect, useState } from "react";
import { getToken } from "../services/authService";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/dashboard.css";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.username);
      fetchTrips(token);
    }
  }, []);

  const fetchTrips = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/trips`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Fetched trips:", response.data);
      setTrips(response.data);
    } catch (err) {
      console.error("Error fetching trips:", err.response?.data || err.message);
    }
  };

  return (
    <div className="dashboard-page">
      <header className="navbar">
        <div className="logo-container">
          <span className="logo-title">Group Travel Dashboard</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign Out</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="dashboard-content">
        <h1>Welcome - {username}</h1>

        <br />
        <br />
        <div className="trips-section">
          <br />
          <button className="add-trip-btn">
            <Link to="/add-trip">Add Trip</Link>
          </button>
          <hr />
          <br />
          <h2>Your Trips</h2>
          <br />
          {trips.length > 0 ? (
            <div className="trip-cards-container">
              {trips.map((trip) => (
                <div key={trip.id} className="trip-card">
                  <h3>{trip.name}</h3>
                  <p>
                    <strong>Start Date:</strong>{" "}
                    {new Date(trip.start_date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>End Date:</strong>{" "}
                    {new Date(trip.end_date).toLocaleDateString()}
                  </p>
                  <Link to={`/trip/${trip.id}`} className="view-details-btn">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No trips available. Start planning your adventure!</p>
          )}
        </div>
      </main>

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

export default Dashboard;
