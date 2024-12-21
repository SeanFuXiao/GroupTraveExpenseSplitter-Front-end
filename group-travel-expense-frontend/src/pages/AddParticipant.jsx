import React, { useState } from 'react';
import { addParticipant } from '../services/participantService';
import "../styles/addparticipant.css"
const AddParticipant = ({ tripId }) => {
    const [participantData, setParticipantData] = useState({
      trip_id: tripId || '',
      user_id: '',
      amount_paid: 0,
      amount_owed: 0,
      balance: 0,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setParticipantData({ ...participantData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // API call to submit participant data
      try {
        const response = await fetch('/api/participants', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(participantData),
        });
  
        if (response.ok) {
          alert('Participant added successfully!');
          setParticipantData({
            trip_id: tripId || '',
            user_id: '',
            amount_paid: 0,
            amount_owed: 0,
            balance: 0,
          });
        } else {
          alert('Failed to add participant.');
        }
      } catch (error) {
        console.error('Error adding participant:', error);
      }
    };
  
    return (
      <div className="add-participant">
        <h1>Add Participant</h1>
        <form onSubmit={handleSubmit} className="add-participant-form">
          <div className="form-group">
            <label htmlFor="trip_id">Trip ID</label>
            <input
              type="text"
              id="trip_id"
              name="trip_id"
              value={participantData.trip_id}
              onChange={handleChange}
              required
              disabled={!!tripId} // Disable if tripId is passed as a prop
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="user_id">User ID</label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              value={participantData.user_id}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="amount_paid">Amount Paid</label>
            <input
              type="number"
              id="amount_paid"
              name="amount_paid"
              value={participantData.amount_paid}
              onChange={handleChange}
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="amount_owed">Amount Owed</label>
            <input
              type="number"
              id="amount_owed"
              name="amount_owed"
              value={participantData.amount_owed}
              onChange={handleChange}
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="balance">Balance</label>
            <input
              type="number"
              id="balance"
              name="balance"
              value={participantData.balance}
              onChange={handleChange}
              readOnly
            />
          </div>
  
          <button type="submit" className="submit-button">
            Add Participant
          </button>
        </form>
      </div>
    );
  };
  
  export default AddParticipant;