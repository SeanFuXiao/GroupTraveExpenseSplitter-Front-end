import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AddTrip = () => {
  const navigate = useNavigate();
  const [tripData, setTripData] = useState({
    name: "",
    start_date: "",
    end_date: "",
    participants: [],
  });
  const [participants, setParticipants] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setErrorMessage("User is not authenticated.");
          return;
        }
        const response = await axios.get(`${BASE_URL}/api/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setParticipants(response.data);
      } catch (error) {
        setErrorMessage(
          error.response?.data?.error || "Failed to fetch participants."
        );
      }
    };
    fetchParticipants();
  }, []);

  const handleAddParticipant = () => {
    if (selectedParticipant && !tripData.participants.includes(selectedParticipant)) {
      setTripData((prev) => ({
        ...prev,
        participants: [...prev.participants, selectedParticipant],
      }));
      setSelectedParticipant("");
    } else {
      setErrorMessage("Please select a valid participant.");
    }
  };

  const handleRemoveParticipant = (participant) => {
    setTripData((prev) => ({
      ...prev,
      participants: prev.participants.filter((p) => p !== participant),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, start_date, end_date, participants } = tripData;

    if (!name || !start_date || !end_date) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (new Date(start_date) > new Date(end_date)) {
      setErrorMessage("Start date cannot be after end date.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/api/trips`,
        {
          name,
          start_date,
          end_date,
          participants,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccessMessage("Trip created successfully!");
      setTimeout(() => navigate(`/trips/${response.data._id}`), 2000);
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Failed to create trip.");
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
    <div className="add-trip-page">
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

      <main className="add-trip-content">
        <h1>Create a New Trip</h1>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Trip Name</label>
            <input
              type="text"
              placeholder="Trip Name"
              value={tripData.name}
              onChange={(e) =>
                setTripData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              value={tripData.start_date}
              onChange={(e) =>
                setTripData((prev) => ({ ...prev, start_date: e.target.value }))
              }
              required
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              value={tripData.end_date}
              onChange={(e) =>
                setTripData((prev) => ({ ...prev, end_date: e.target.value }))
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Participants</label>
            <select
              value={selectedParticipant}
              onChange={(e) => setSelectedParticipant(e.target.value)}
            >
              <option value="">Select Participant</option>
              {participants.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.username}
                </option>
              ))}
            </select>
            <button type="button" onClick={handleAddParticipant}>
              Add Participant
            </button>
          </div>

          {tripData.participants.length > 0 && (
            <div className="participants-list">
              <h3>Selected Participants</h3>
              <ul>
                {tripData.participants.map((participant) => (
                  <li key={participant}>
                    {participants.find((p) => p._id === participant)?.username ||
                      participant}
                    <button
                      type="button"
                      onClick={() => handleRemoveParticipant(participant)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button type="submit" className="submit-btn">
            Create Trip
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddTrip;
