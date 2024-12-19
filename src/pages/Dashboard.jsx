import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
    <h2>Your Home</h2>
    <Link to="/trips">View Your Trips</Link>
  </div>
  );
};
export default Dashboard;