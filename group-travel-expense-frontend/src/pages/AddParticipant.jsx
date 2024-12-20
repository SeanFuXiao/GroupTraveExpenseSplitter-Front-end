import React, { useState } from 'react';
import { addParticipant } from '../services/participantService';

const AddParticipant = ({ tripId }) => {
    const [formData, setFormData] = useState({
      user_id: "",
      amount_paid: 0,
      amount_owed: 0,
    });
    const [message, setMessage] = useState("");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`http://localhost:5000/api/trips/${tripId}/participants`, formData);
        setMessage("Participant added successfully!");
      } catch (error) {
        setMessage("Error adding participant.");
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Add Participant</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_id"
            placeholder="User ID"
            value={formData.user_id}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount_paid"
            placeholder="Amount Paid"
            value={formData.amount_paid}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount_owed"
            placeholder="Amount Owed"
            value={formData.amount_owed}
            onChange={handleChange}
          />
          <button type="submit">Add Participant</button>
        </form>
      </div>
    );
  };
  
  export default AddParticipant;