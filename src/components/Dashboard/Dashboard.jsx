//import { AuthedUserContext } from '../../App';
//import { useContext } from 'react'; 
import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';



const Dashboard = ({ }) => {
   const [trips, setTrips]= useState([]); //useContext(AuthedUserContext);
   
   useEffect(() => {
    setTrips([
      { id: 1, name: 'London Adventure', total: 1300, participants: 3},
      { id: 2, name: 'Italy Road Trip', total: 400, participats: 4},
    
     
    ]);
   }, []);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        <div> 
          <h2>Your Trips</h2>
          <button>
            <Link to='/add-trip'>Add A New Trip</Link>
          </button>
          <table>
            <thead>
              <tr>
                <th>Trip Name</th>
                <th>Total Expenses</th>
                <th>Participants</th>
                <th>Details</th>

              </tr>
            </thead>
         
          <tbody>
          {trips.map((trip) => (
            <tr key={trip.id}>
              <td>{trip.name}</td>
              <td>${trip.total}</td>
              <td>{trip.participants}</td>
              <td>
                <Link to={`/trip/${trip.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
          </tbody>
          </table>
        </div>
      </p>
    </main>
  );
};

export default Dashboard;