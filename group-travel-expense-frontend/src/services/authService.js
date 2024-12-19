import api from "./api";

export const signup = async (formData) => {
  const res = await api.post("/api/auth/register", formData);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const login = async (credentials) => {
  const res = await api.post("/api/auth/login", credentials);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const getUser = async (id) => {
  const res = await api.get(`/api/auth/${id}`);
  return res.data;
};

export const updateUser = async (id, updatedData) => {
  const res = await api.put(`/api/auth/${id}`, updatedData);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await api.delete(`/api/auth/${id}`);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};
