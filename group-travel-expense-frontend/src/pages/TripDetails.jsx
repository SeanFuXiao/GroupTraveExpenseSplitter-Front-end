import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const TripDetails = () => {
  const { id } = useParams();
  const [tripDetails, setTripDetails] = useState(null);
  const [bills, setBills] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [newBill, setNewBill] = useState({ description: "", amount: 0, payer_id: "" });
  const [newParticipant, setNewParticipant] = useState({ user_id: "", amount_paid: 0 });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTripData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setErrorMessage("User is not authenticated.");
          return;
        }
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
      } finally {
        setIsLoading(false);
      }
    };
    fetchTripData();
  }, [id]);

  const addBill = async () => {
    if (!newBill.description || newBill.amount <= 0 || !newBill.payer_id) {
      setErrorMessage("Please provide valid bill details.");
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
          payer_id: newBill.payer_id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBills((prev) => [...prev, response.data]);
      setNewBill({ description: "", amount: 0, payer_id: "" });
      setSuccessMessage("Bill added successfully!");
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Failed to add the bill.");
    }
  };

  const addParticipant = async () => {
    if (!newParticipant.user_id || newParticipant.amount_paid < 0) {
      setErrorMessage("Please provide valid participant details.");
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
      setErrorMessage(error.response?.data?.error || "Failed to add the participant.");
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

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
        {isLoading ? (
          <p>Loading trip details...</p>
        ) : tripDetails ? (
          <div className="trip-info">
            <h1>{tripDetails.name}</h1>
            <p>
              <strong>Start Date:</strong> {new Date(tripDetails.start_date).toLocaleDateString()}
            </p>
            <p>
              <strong>End Date:</strong> {new Date(tripDetails.end_date).toLocaleDateString()}
            </p>
            <p>
              <strong>Total Cost:</strong> ${tripDetails.total_cost || 0}
            </p>
          </div>
        ) : (
          <p>Failed to load trip details.</p>
        )}

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="trip-sections">
          <div className="section add-bill-section">
            <h2>Add Bill</h2>
            <input
              type="text"
              placeholder="Bill Description"
              value={newBill.description}
              onChange={(e) => setNewBill({ ...newBill, description: e.target.value })}
            />
            <input
              type="number"
              placeholder="Amount"
              value={newBill.amount}
              onChange={(e) => setNewBill({ ...newBill, amount: parseFloat(e.target.value) })}
            />
            <select
              value={newBill.payer_id}
              onChange={(e) => setNewBill({ ...newBill, payer_id: e.target.value })}
            >
              <option value="">Select Payer</option>
              {participants.map((p) => (
                <option key={p.user_id} value={p.user_id}>
                  {p.user_id}
                </option>
              ))}
            </select>
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
                setNewParticipant({ ...newParticipant, user_id: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Amount Paid"
              value={newParticipant.amount_paid}
              onChange={(e) =>
                setNewParticipant({ ...newParticipant, amount_paid: parseFloat(e.target.value) })
              }
            />
            <button onClick={addParticipant} className="add-participant-btn">
              Add Participant
            </button>
          </div>

          <div className="section bills-section">
            <h2>Bills</h2>
            {bills.length > 0 ? (
              bills.map((bill) => (
                <div key={bill._id} className="bill-card">
                  <p>
                    <strong>{bill.description}</strong>
                  </p>
                  <p>Amount: ${bill.amount}</p>
                </div>
              ))
            ) : (
              <p>No bills added yet.</p>
            )}
          </div>

          <div className="section participants-section">
            <h2>Participants</h2>
            {participants.length > 0 ? (
              participants.map((participant) => (
                <div key={participant.user_id} className="participant-card">
                  <p>
                    <strong>User ID: {participant.user_id}</strong>
                  </p>
                  <p>Paid: ${participant.amount_paid || 0}</p>
                  <p>Balance: ${participant.balance || 0}</p>
                </div>
              ))
            ) : (
              <p>No participants added yet.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripDetails;