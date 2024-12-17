import { AuthedUserContext } from '../../App';
import { useContext } from 'react'; 
import React from "react";

const Dashboard = ({ }) => {
   const user = useContext(AuthedUserContext);
   
  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is a dashboard. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nobis omnis vel eveniet ea aspernatur ducimus.
      </p>
    </main>
  );
};

export default Dashboard;