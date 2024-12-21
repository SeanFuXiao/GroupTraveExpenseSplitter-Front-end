import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../styles/tripdetails.css";



const BASE_URL = import.meta.env.VITE_BASE_URL;

const TripDetails = () => {
  const { id } = useParams();
  const [tripDetails, setTripDetails] = useState(null);
  const [bills, setBills] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [newBill, setNewBill] = useState({ description: "", amount: 0 });
  const [newParticipant, setNewParticipant] = useState({
    user_id: "",
    amount_paid: 0,
  });
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

  const addParticipant = async () => {
    if (!newParticipant.user_id || newParticipant.amount_paid === undefined) {
      setErrorMessage("Please provide user ID and amount paid.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/api/participants`,
        {
          trip_id: id,
          user_id: newParticipant.user_id,
          amount_paid: newParticipant.amount_paid,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setParticipants((prev) => [...prev, response.data]);
      setNewParticipant({ user_id: "", amount_paid: 0 });
      setSuccessMessage("Participant added successfully!");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Failed to add the participant."
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
          </div>

          <div className="section add-participant-section">
            <h2>Add Participant</h2>
            <input
              type="text"
              placeholder="User ID"
              value={newParticipant.user_id}
              onChange={(e) =>
                setNewParticipant((prev) => ({
                  ...prev,
                  user_id: e.target.value,
                }))
              }
            />
            <input
              type="number"
              placeholder="Amount Paid"
              value={newParticipant.amount_paid}
              onChange={(e) =>
                setNewParticipant((prev) => ({
                  ...prev,
                  amount_paid: parseFloat(e.target.value),
                }))
              }
            />
            <button onClick={addParticipant} className="add-participant-btn">
              Add Participant
            </button>
          </div>

          <div className="section bills-section">
            <h2>Bills</h2>
            {bills.map((bill) => (
              <div key={bill.id} className="bill-card">
                <p>
                  <strong>{bill.description}</strong>
                </p>
                <p>Amount: ${bill.amount}</p>
              </div>
            ))}
          </div>

          <div className="section participants-section">
            <h2>Participants</h2>
            {participants.map((participant) => (
              <div key={participant.username} className="participant-card">
                <p>
                  <strong>{participant.username}</strong>
                </p>
                <p>Paid: ${participant.amount_paid || 0}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripDetails;