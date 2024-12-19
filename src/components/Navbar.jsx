import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import { AuthedUserContext } from "../../App";
//import { useContext } from 'react';


const Navbar = ({ handleSignout, user }) => {
  //const user = useContext(AuthedUserContext);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signin"); 
  };
  return (
    <>
      {user ? (
        <nav>
          <ul>
            <li>Welcome, {user.username}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/trips'>Trips</Link>
            </li>
            <li>
              <Link to='/trips/new'>NEW Trip</Link>
            </li>
            <li><Link to="/signin">Sign In</Link></li>
             <li><Link to="/signup">Sign Up</Link></li>
            <li>
              <Link to="" onClick={handleSignout}>
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};



export default Navbar;