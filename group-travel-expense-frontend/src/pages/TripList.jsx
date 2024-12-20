/*import React from "react";
import { useNavigate } from "react-router-dom";

const TripList = () => {
  const trips = [
    { id: "1", name: "London Adventure" },
    { id: "2", name: "Italy Road Trip" },
  ];
  const navigate = useNavigate();

  const handleViewDetails = (tripId) => {
    navigate(`/trip/${tripId}`);
  };

  return (
    <div>
      <h1>Trip List</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            {trip.name}{" "}
            <button onClick={() => handleViewDetails(trip.id)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;*/