import api from "./api";

export const addParticipant = async (participantData) => {
  const res = await api.post("/api/participants", participantData);
  return res.data;
};

export const getTripParticipants = async (tripId) => {
  const res = await api.get(`/api/participants/trip/${tripId}`);
  return res.data;
};

export const removeParticipant = async (id) => {
  const res = await api.delete(`/api/participants/${id}`);
  return res.data;
};
