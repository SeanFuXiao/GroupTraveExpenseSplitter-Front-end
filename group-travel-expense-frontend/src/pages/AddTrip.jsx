import React, { useState } from "react";
import axios from "axios";

const AddTrip = () => {
  const [tripName, setTripName] = useState("");
  const [location, setLocation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddTrip = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/trip", {
        name: tripName,
        location,
      });

      setSuccessMessage("Trip added successfully!");
      setErrorMessage("");
      setTripName("");
      setLocation("");
    } catch (error) {
      console.error("Error adding trip:", error);
      setErrorMessage("Failed to add trip.");
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <h2>Add Trip</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleAddTrip}>
        <div>
          <label htmlFor="tripName">Trip Name:</label>
          <input
            type="text"
            id="tripName"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default AddTrip;

