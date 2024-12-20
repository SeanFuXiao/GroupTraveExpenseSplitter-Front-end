import React, { useState } from "react";
import axios from "axios";

const AddTrip = () => {
  const [formData, setFormData] = useState({
    name: "",
    start_date: "",
    end_date: "",
    total_cost: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post("http://localhost:5000/api/trips", formData, config);
      setMessage("Trip added successfully!");
    } catch (error) {
      setMessage("Error adding trip. Please check your inputs or token.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Trip</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Trip Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default AddTrip;
