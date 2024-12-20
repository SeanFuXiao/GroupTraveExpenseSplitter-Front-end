import React, { useState, useEffect } from "react"
import AddBill  from "./AddBill";
import axios from "axios";
import { useParams } from "react-router-dom";

const TripDetails = () => {
  const { tripId } = useParams(); // Get the tripId from the URL
  const [tripDetails, setTripDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5173/api/trips/${Id}`
        );
        setTripDetails(response.data);
      } catch (error) {
        console.error("Error fetching trip details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTripDetails();
  }, [tripId]);

  if (loading) return <p>Loading trip details...</p>;

  if (!tripDetails) return <p>No details found for this trip.</p>;

  return (
    <div>
      <h1>{tripDetails.name}</h1>
      <p>Location: {tripDetails.location}</p>
      <h2>Expenses</h2>
      <ul>
        {tripDetails.expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripDetails;

