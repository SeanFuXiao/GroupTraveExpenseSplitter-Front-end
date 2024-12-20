import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/authService";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  return children;
};

export default ProtectedRoute;