import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <h1>Welcome, {username}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}

export default Dashboard;