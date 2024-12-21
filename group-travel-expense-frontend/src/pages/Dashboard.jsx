import React, { useEffect, useState } from "react";
import { getToken } from "../services/authService";
//import jwtDecode from "jwt-decode";
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
      //const decodedToken = jwtDecode(token);
      //setUsername(decodedToken.username);
      fetchTrips(token);
    }
  }, []);

  const fetchTrips = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/trips`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Fetched trips:", response.data);
      setTrips(response.data); // Assuming API returns an array of trips
    } catch (err) {
      console.error("Error fetching trips:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    const token = getToken();
    try {
      await axios.delete(`${BASE_URL}/api/trips/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrips((prevTrips) => prevTrips.filter((trip) => trip._id !== id)); // Use `_id` as per MongoDB default ID field
      console.log(`Trip with ID ${id} deleted successfully.`);
    } catch (err) {
      console.error(
        `Error deleting trip with ID ${id}:`,
        err.response?.data || err.message
      );
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
        <div className="trips-section">
          <button className="add-trip-btn">
            <Link to="/add-trips">Add Trip</Link>
          </button>
          <hr />
          <h2>Your Trips</h2>
          {trips.length > 0 ? (
            <div className="trip-cards-container">
              {trips.map((trip) => (
                <div key={trip._id} className="trip-card"> {/* Use _id */}
                  <div className="card-header">
                    <h3>{trip.name}</h3>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(trip._id)} // Use _id
                      title="Delete Trip"
                    >
                      &times;
                    </button>
                  </div>
                  <p>
                    <strong>Start Date:</strong>{" "}
                    {new Date(trip.start_date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>End Date:</strong>{" "}
                    {new Date(trip.end_date).toLocaleDateString()}
                  </p>
                  <Link to={`/trip/${trip._id}`} className="view-details-btn"> {/* Use _id */}
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

/*const Dashboard = () => {
  
  const [username, setUsername] = useState("");
  const [trips, setTrips]= useState([]);
  useEffect(() => {
    setTrips([
      { id: 1, name: 'London Adventure', total: 1300, participants: 3},
      { id: 2, name: 'Italy Road Trip', total: 400, participats: 4},
    
     
    ]);
   }, [])

  return (
     <main>
          <h1>Welcome, {user.username}</h1>
         <div>
            <div> 
              <h2>Your Trips</h2>
              <button>
                <Link to='/add-trip'>Add A New Trip</Link>
              </button>
              <table>
                <thead>
                  <tr>
                    <th>Trip Name</th>
                    <th>Total Expenses</th>
                    <th>Participants</th>
                    <th>Details</th>
    
                  </tr>
                </thead>
             
              <tbody>
              {trips.map((trip) => (
                <tr key={trip.id}>
                  <td>{trip.name}</td>
                  <td>${trip.total}</td>
                  <td>{trip.participants}</td>
                  <td>
                    <Link to={`/trip/${trip.id}`}>View Details</Link>
                  </td>
                </tr>
              ))}
              </tbody>
              </table>
            </div>
         </div>
        </main>

  );
}

export default Dashboard;*/
