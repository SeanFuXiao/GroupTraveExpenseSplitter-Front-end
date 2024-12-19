import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import TripDetails from "./pages/TripDetails";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trip/:id" element={<TripDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
