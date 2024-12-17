import { useState, createContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SigninForm from "./components/SigninForm/SigninForm";
import SignupForm from "./components/SignupForm/SignupForm";
import * as authService from '../src/services/authService';
import * as hootService from '../src/services/hootService';




export const AuthedUserContext = createContext(null);

const App = ( ) => {
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
          <Route path='signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
    </AuthedUserContext.Provider>
    
    </>
  );
};

export default App
