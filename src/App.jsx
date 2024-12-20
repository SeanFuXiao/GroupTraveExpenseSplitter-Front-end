//import { useState, createContext, useEffect } from 'react'

import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Signin from "./pages/Signin";
import Signup from  "./pages/Signup"; 

//import TripList from './pages/TripList';
import AddBill from './pages/AddBill';
import TripDetails from './pages/TripDetails';
import './assets/app.css';
//import { getToken } from '/token'; 

function App() {
  /*const [token, setToken] = useState(getToken());

  useEffect(() => {
     Optionally, handle token expiry logic or setInterval for refreshing the token.
  }, [token]);*/

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addbill" element={<AddBill />} />
       
        <Route path="/trip/:id" element={<TripDetails />} />
      </Routes>
    </Router>
  );
}



//export const AuthedUserContext = createContext(null);

/*const App = ( ) => {
  const [user, setUser] = useState(authService.getUser());
  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };
  return (
    <>
    <AuthedUserContext.Provider value={user}>
      <NavBar user={user} handleSignout={handleSignout}/>
      <Routes>
      {user ? (
            <Route path="/" element={<Dashboard user={user} />} />
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path='/signup' element={<SignupForm setUser={setUser} /> } />
          <Route path='/signin' element={<SigninForm setUser={setUser} />} />
          <Route path="/trips" element={<TripList setUser={setUser} /> } />
          <Route path="/trip/:id" element={<TripDetails setUser={setUser} />} />


      </Routes>
    </AuthedUserContext.Provider>
    
    </>
  );
};*/

export default App;
