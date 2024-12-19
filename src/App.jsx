import { useState, createContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SigninForm from "./components/SigninForm/SigninForm";
import SignupForm from './components/SignupForm/SignupForm';
import * as authService from '../src/services/authService';
import * as tripService from './services/tripService';
import TripDetails from './components/TripDetails/TripDetails';
import TripList from './components/TripList/TripList';
import AddExpense from './components/AddExpense/AddExpense';
import CommentForm from './components/CommentForm/CommentForm';
import './assets/app.css';*/
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import SigninForm from "./pages/SigninForm";
import SignupForm from './pages/SignupForm';
import TripList from './pages/TripList';
import AddExpense from './pages/AddExpense';
import TripDetails from './pages/TripDetails';
import './assets/app.css';
import { getToken } from '/token'; 

function App() {
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    // Optionally, handle token expiry logic or setInterval for refreshing the token.
  }, [token]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <Landing />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/trips" element={<TripList />} />
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

export default App
