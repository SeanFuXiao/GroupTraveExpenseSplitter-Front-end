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


function App() {
  console.log("!")
};

export default App
