import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import TripDetails from "./pages/TripDetails";
import AddTrip from "./pages/AddTrip";
import AddBill from "./pages/AddBill";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/add-trip" element={<AddTrip />} />
        <Route path="/add-bill/:tripId" element={<AddBill />} />
      </Routes>
    </Router>
  );
};

export default App;
