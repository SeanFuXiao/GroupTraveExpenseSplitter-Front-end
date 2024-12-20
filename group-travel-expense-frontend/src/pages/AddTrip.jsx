import React, { useState } from "react";
import axios from "axios";
import "../styles/addtrip.css"
import { addTrip } from "../testapi"
import { useNavigate } from 'react-router-dom';

const AddTrip = () => {
  const navigate = useNavigate();
  const [tripData, setTripData] = useState({
    name: '',
    start_date: '',
    end_date: '',
    total_cost: 0,
    participants: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Correct API URL without `id`
    const API_URL = 'http://localhost:5173/api/trips';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tripData),
      });

      if (response.ok) {
        alert('Trip added successfully!');
        setTripData({
          name: '',
          start_date: '',
          end_date: '',
          total_cost: 0,
          participants: [],
        });
      } else {
        alert('Failed to add trip.');
      }
    } catch (error) {
      console.error('There is An Error:', error);
    }
  };

  return (
    <div className="add-trip">
      <h1>Add New Trip</h1>
      <form onSubmit={handleSubmit} className="add-trip-form">
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
          <label htmlFor="total_cost">Total Cost</label>
          <input
            type="number"
            id="total_cost"
            name="total_cost"
            value={tripData.total_cost}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Add Trip
        </button>
      </form>

      <div className="navigation-buttons">
        <button
          className="nav-button"
          onClick={() => navigate('/addparticipant')}
        >
          Add Participant
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('/addbill')}
        >
          Add Bill
        </button>
      </div>
    </div>
  );
};

export default AddTrip;