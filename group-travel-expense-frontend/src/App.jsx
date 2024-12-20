import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import TripDetails from "./pages/TripDetails";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AddParticipant from "./pages/AddParticipant";
import AddTrip from "./pages/AddTrip";
//import TripList from "./pages/TripList";

function App() {
  
  return (
    <Router>
      
      <Routes>
        <Route path="/Landing" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trip/:tripId" element={<TripDetails />} />
        <Route path="/addparticipant" element={<AddParticipant />} />
        <Route path="/add-trip" element={<AddTrip />} />
      </Routes>
    </Router>
  );
}

export default App;
