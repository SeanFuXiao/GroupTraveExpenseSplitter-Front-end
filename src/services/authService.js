import api from "./api";

export const signup = async (formData) => {
  try {
    const res = await api.post("/api/auth/register", formData);
    return res.data;
  } catch (error) {
    throw error.response?.data || { error: "Signup failed" };
  }
};

export const login = async (credentials) => {
  try {
    const res = await api.post("/api/auth/login", credentials);

    if (res.data.error) {
      throw new Error(res.data.error);
    }

    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw new Error("Invalid username or password. Please try again.");
  }
};

export const getUser = async (id) => {
  try {
    const res = await api.get(`/api/auth/${id}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (id, updatedData) => {
  try {
    const res = await api.put(`/api/auth/${id}`, updatedData);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await api.delete(`/api/auth/${id}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token || null;
};

const handleError = (error) => {
  console.error("API Error:", error.response || error.message);
  throw new Error(
    error.response?.data?.error || "An unexpected error occurred."
  );
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
 

