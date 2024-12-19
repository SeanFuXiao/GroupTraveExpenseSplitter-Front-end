import api from "./api";

export const createTrip = async (tripData) => {
  const res = await api.post("/api/trips", tripData);
  return res.data;
};

export const getAllTrips = async () => {
  const res = await api.get("/api/trips");
  return res.data;
};

export const getTripDetails = async (id) => {
  const res = await api.get(`/api/trips/${id}`);
  return res.data;
};

export const updateTrip = async (id, updatedData) => {
  const res = await api.put(`/api/trips/${id}`, updatedData);
  return res.data;
};

export const deleteTrip = async (id) => {
  const res = await api.delete(`/api/trips/${id}`);
  return res.data;
};
