import api from "./api";

export const createBill = async (billData) => {
  const res = await api.post("/api/bills", billData);
  return res.data;
};

export const getAllBills = async () => {
  const res = await api.get("/api/bills");
  return res.data;
};

export const getBillDetails = async (id) => {
  const res = await api.get(`/api/bills/${id}`);
  return res.data;
};

export const updateBill = async (id, updatedData) => {
  const res = await api.put(`/api/bills/${id}`, updatedData);
  return res.data;
};

export const deleteBill = async (id) => {
  const res = await api.delete(`/api/bills/${id}`);
  return res.data;
};