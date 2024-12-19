import api from "./api";

export const signup = async (formData) => {
  try {
    const res = await api.post("/api/auth/register", formData);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Signup failed");
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
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

export const getUser = async (id) => {
  try {
    const res = await api.get(`/api/auth/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to fetch user");
  }
};

export const updateUser = async (id, updatedData) => {
  try {
    const res = await api.put(`/api/auth/${id}`, updatedData);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to update user");
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await api.delete(`/api/auth/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to delete user");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
