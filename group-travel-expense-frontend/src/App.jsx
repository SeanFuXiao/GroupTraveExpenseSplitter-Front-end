import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import TripDetails from "./pages/TripDetails";
import AddTrip from "./pages/AddTrip";
import AddBill from "./pages/AddBill";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trip/:id"
            element={
              <ProtectedRoute>
                <TripDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-trip"
            element={
              <ProtectedRoute>
                <AddTrip />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-bill"
            element={
              <ProtectedRoute>
                <AddBill />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
