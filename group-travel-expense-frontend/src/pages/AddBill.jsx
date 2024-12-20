import React, { useState } from "react";

const AddBill = ({ tripId }) => {
  const [formData, setFormData] = useState({
    payer_id: "",
    amount: 0,
    category: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/trips/${tripId}/bills`, formData);
      setMessage("Bill added successfully!");
    } catch (error) {
      setMessage("Error adding bill.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Bill</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="payer_id"
          placeholder="Payer ID"
          value={formData.payer_id}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default AddBill;
