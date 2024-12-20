import React, { useState } from 'react';
import { addParticipant } from '../services/participantService';

const AddParticipants = ({ tripId }) => {
    const [participantName, setParticipantName] = useState("");
    const [email, setEmail] = useState("");
    const [participants, setParticipants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
    const handleAddParticipant = async (e) => {
      e.preventDefault();
  
      if (!participantName || !email) {
        setErrorMessage("Name and Email are required");
        return;
      }
  
      try {
        const response = await axios.post(
          `http://localhost:5000/api/trip/${tripId}/participants`,
          { name: participantName, email }
        );
        setParticipants([...participants, response.data]); // Update participant list
        setParticipantName(""); // Reset input fields
        setEmail("");
        setErrorMessage("");
        setSuccessMessage("Participant added successfully!");
      } catch (error) {
        console.error("Error adding participant:", error);
        setErrorMessage(
          error.response?.data?.message || "Failed to add participant."
        );
        setSuccessMessage("");
      }
    };
  
    return (
      <div>
        <h2>Add Participants</h2>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <form onSubmit={handleAddParticipant}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Participant</button>
        </form>
  
        <h3>Current Participants</h3>
        <ul>
          {participants.map((participant, index) => (
            <li key={index}>
              {participant.name} ({participant.email})
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AddParticipants;