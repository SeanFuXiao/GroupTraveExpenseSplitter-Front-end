import React, { useState } from "react";

const AddBill = ({ tripId }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    payer: "",
  });
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/trip/${tripId}/bills`,
        formData
      );
      setMessage("Bill added successfully!");
      setFormData({ name: "", amount: "", payer: "" });
    } catch (error) {
      console.error("Error adding bill", error);
      setErrorMessage(
        error.response?.data?.message || "Failed to add bill. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Add Bill</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Bill Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="payer">Payer:</label>
          <input
            type="text"
            id="payer"
            name="payer"
            value={formData.payer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default AddBill;
