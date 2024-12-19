import api from "./api";

export const signup = async (formData) => {
  const res = await api.post("/api/auth/register", formData);
  return res.data;
};

export const login = async (credentials) => {
  const res = await api.post("/api/auth/login", credentials);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getUserDetails = async (id) => {
  const res = await api.get(`/api/auth/${id}`);
  return res.data;
};
