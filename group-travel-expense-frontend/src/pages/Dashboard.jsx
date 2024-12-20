import React, { useEffect, useState } from "react";
import { getToken } from "../services/authService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const user = JSON.parse(atob(token.split(".")[1]));
        setUsername(user.username || "User");
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
    setTrips([
      { id: 1, name: "London Adventure", total: 1300, participants: 3 },
      { id: 2, name: "Italy Road Trip", total: 400, participants: 4 },
    ]);
  }, [])



  return (
    <div>
     <header className="navbar">
             <div className="logo-container">
               <img
                 src="/src/assets/images/logo.png"
                 alt="Group Travel Logo"
                 className="logo-image"
               />
               <span className="logo-title">Dashboard</span>
             </div>
             <nav>
               <ul>
                 <li>
                   <Link to="/signin">Sign Out</Link>
                 </li>
                 
                 <li>
                   <Link to="/">HOME</Link>
                 </li>
               </ul>
             </nav>
           </header>
           <div className="dashboard content">
            <h1>Welcome {username}</h1>
            <button onClick={() => navigate("/add-trip")}>Add Trip</button>
      <button onClick={() => navigate("/addparticipant")}>Add Participant</button>
            <div className="trips">
              <h2>Trips</h2>
               <table className="triptable">
                <thead>
                 <tr>
                  <th>Trip Name</th>
                  <th> Total Coast</th>
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
              




           </div>
           <footer className="footer">
            <p
              style={{
                marginBottom: "10px",
                fontSize: "0.9rem",
                fontFamily: "Arial, sans-serif",
                color: "#ffffff",
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              }}
            >
              &copy; 2024 Group Travel Expense Splitter. Authors: Sean and
              Nowra.
            </p>
            <ul>
              <a href="mailto:seanfuxiao@gmail.com?subject=Contact%20Us&body=Hi%20Sean%20and%20Nowra,">
                Contact Us
              </a>
            </ul>
          </footer>
           </div> 

  )
}; 












    
export default Dashboard;

/*const Dashboard = () => {
  
  const [username, setUsername] = useState("");
  const [trips, setTrips]= useState([]);
  useEffect(() => {
    setTrips([
      { id: 1, name: 'London Adventure', total: 1300, participants: 3},
      { id: 2, name: 'Italy Road Trip', total: 400, participats: 4},
    
     
    ]);
   }, [])

  return (
     <main>
          <h1>Welcome, {user.username}</h1>
         <div>
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
         </div>
        </main>

  );
}

export default Dashboard;*/
