import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/tripdetails.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const TripDetails = () => {
  const { id } = useParams();
  const [tripDetails, setTripDetails] = useState(null);
  const [bills, setBills] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [newBill, setNewBill] = useState({ description: "", amount: 0 });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BASE_URL}/api/trips/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTripDetails(response.data);
        setBills(response.data.bills || []);
        setParticipants(response.data.participants || []);
      } catch (error) {
        setErrorMessage(
          error.response?.data?.error || "Failed to fetch trip details."
        );
      }
    };

    fetchTripDetails();
  }, [id]);

 
  const addBill = async () => {
    if (!newBill.description || !newBill.amount) {
      setErrorMessage("Please provide bill description and amount.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/api/bills`,
        {
          trip_id: id,
          description: newBill.description,
          amount: newBill.amount,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBills((prevBills) => [...prevBills, response.data]);
      setNewBill({ description: "", amount: 0 });
      setSuccessMessage("Bill added successfully!");
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Failed to add the bill.");
    }
  };

  const deleteBill = async (billId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BASE_URL}/api/bills/${billId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBills((prevBills) => prevBills.filter((bill) => bill.id !== billId));
      setSuccessMessage("Bill deleted successfully!");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Failed to delete the bill."
      );
    }
  };

  return (
    <div className="trip-details-page">
      <header className="navbar">
        <div className="logo-container">
          <span className="logo-title">Group Travel Dashboard</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign Out</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="trip-details-content">
        {tripDetails && (
          <div className="trip-info">
            <h1>{tripDetails.name}</h1>
            <p>
              <strong>Start Date:</strong>{" "}
              {new Date(tripDetails.start_date).toLocaleDateString()}
            </p>
            <p>
              <strong>End Date:</strong>{" "}
              {new Date(tripDetails.end_date).toLocaleDateString()}
            </p>
            <p>
              <strong>Total Cost:</strong> ${tripDetails.total_cost || 0}
            </p>
          </div>
        )}

        <div className="trip-sections">
          
          <div className="section add-bill-section">
            <h2>Add Bill</h2>
            <input
              type="text"
              placeholder="Bill Description"
              value={newBill.description}
              onChange={(e) =>
                setNewBill((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <input
              type="number"
              placeholder="Amount"
              value={newBill.amount}
              onChange={(e) =>
                setNewBill((prev) => ({ ...prev, amount: e.target.value }))
              }
            />
            <button onClick={addBill} className="add-bill-btn">
              Add Bill
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
          <div className="section bills-section">
            <h2>Bills</h2>
            <div className="bills-container">
              {bills.map((bill) => (
                <div key={bill.id} className="bill-card">
                  <p>
                    <strong>{bill.description}</strong>
                  </p>
                  <p>Amount: ${bill.amount}</p>
                  <button
                    className="delete-bill-btn"
                    onClick={() => deleteBill(bill.id)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

    
          <div className="section participants-section">
            <h2>Participants</h2>
            <div className="participants-container">
              {participants.map((participant) => (
                <div key={participant.username} className="participant-card">
                  <p>
                    <strong>{participant.username}</strong>
                  </p>
                  <p>
                    Amount Owed: ${participant.amount_owed?.toFixed(2) || 0}
                  </p>
                  <p>Paid: ${participant.amount_paid?.toFixed(2) || 0}</p>
                  <p>Balance: ${participant.balance?.toFixed(2) || 0}</p>
                </div>
              ))}
            </div>
          </div>
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

export default TripDetails;
