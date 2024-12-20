import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/addtrip.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AddTrip = () => {
  const [tripData, setTripData] = useState({
    name: "",
    start_date: "",
    end_date: "",
    participants: [],
  });
  const [newParticipant, setNewParticipant] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [participantError, setParticipantError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addParticipant = async () => {
    if (newParticipant.trim() === "") {
      setParticipantError("Participant username cannot be empty.");
      return;
    }
    if (tripData.participants.includes(newParticipant.trim())) {
      setParticipantError("Participant already added.");
      return;
    }

    try {
      const response = await axios.get(
        `${BASE_URL}/api/auth/exists/${newParticipant.trim()}`
      );

      if (response.data.exists) {
        setTripData((prevData) => ({
          ...prevData,
          participants: [...prevData.participants, newParticipant.trim()],
        }));
        setNewParticipant("");
        setParticipantError("");
      } else {
        setParticipantError("Participant username does not exist.");
      }
    } catch (error) {
      setParticipantError("Participant username does not exist");
    }
  };

  const removeParticipant = (index) => {
    setTripData((prevData) => ({
      ...prevData,
      participants: prevData.participants.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${BASE_URL}/api/trips`,
        {
          name: tripData.name,
          start_date: tripData.start_date,
          end_date: tripData.end_date,
          participants: tripData.participants,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setSuccessMessage("Trip added successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Failed to add trip. Please try again."
      );
    }
  };

  return (
    <div className="add-trip-page">
      <h1>Add a New Trip</h1>
      <form className="add-trip-form" onSubmit={handleSubmit}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-group">
          <label htmlFor="name">Trip Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={tripData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={tripData.start_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="end_date">End Date</label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            value={tripData.end_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Participants</label>
          <div className="participants-container">
            {tripData.participants.map((participant, index) => (
              <div key={index} className="participant-item">
                {participant}
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeParticipant(index)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Enter participant username"
            value={newParticipant}
            onChange={(e) => setNewParticipant(e.target.value)}
          />
          <button
            type="button"
            className="add-participant-btn"
            onClick={addParticipant}
          >
            Add Participant
          </button>
          {participantError && (
            <p className="participant-error">{participantError}</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
