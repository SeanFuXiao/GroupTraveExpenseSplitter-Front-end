import axios from 'axios';
import SigninForm from "./pages/SigninForm";

const API_URL = 'https://yourapi.com/api/';

export const signIn = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, { username, password });
    const token = response.data.token;
    if (token) {
      localStorage.setItem('token', token); // Save token to localStorage
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error signing in');
  }
};

// Sign up function
export const signUp = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, { username, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error signing up');
  }
};

// Get token
export const getToken = () => {
  return localStorage.getItem('token');
};

// Logout function
export const logout = () => {
  localStorage.removeItem('token');
};















/*const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getUser = () => {
    const token = localStorage.getItem('token');
    if (!token) return null; 
    const user = JSON.parse(atob(token.split('.')[1]));
    return user;
};
const signup = async (formData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
       const json = await res.json();
       if (json.error) {
        throw new Error(json.error);

       }
       localStorage.setItem('token', json.token);
       return json;

    } catch (err) {
        throw new Error(err);
    }
};
const signin = async (user) => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
    if (json.token) {
      localStorage.setItem('token', json.token);
      const user = JSON.parse(atob(json.token.split('.')[1]));
      return user;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const signout = () => {
  localStorage.removeItem('token');
};
 export { signup, signin, getUser, signout};*/
 

