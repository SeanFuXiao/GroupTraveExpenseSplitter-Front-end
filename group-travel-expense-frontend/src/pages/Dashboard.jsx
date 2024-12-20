import React, { useEffect, useState } from "react";
import { getToken } from "../services/authService";

const Dashboard = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = getToken();
    if (token) {
      const user = JSON.parse(atob(token.split(".")[1]));
      setUsername(user.username);
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
