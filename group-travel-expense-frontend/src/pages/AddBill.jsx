import React, { useState } from "react";
import "../styles/addbill.css";



const AddBill = ({ tripId }) => {
  const [billData, setBillData] = useState({
    trip_id: tripId || '',
    payer_id: '',
    amount: 0,
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillData({ ...billData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API call to submit bill data
    try {
      const response = await fetch('/api/bills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(billData),
      });

      if (response.ok) {
        alert('Bill added successfully!');
        setBillData({
          trip_id: tripId || '',
          payer_id: '',
          amount: 0,
          category: '',
          description: '',
        });
      } else {
        alert('Failed to add bill.');
      }
    } catch (error) {
      console.error('Error adding bill:', error);
    }
  };

  return (
    <div className="add-bill">
      <h1>Add New Bill</h1>
      <form onSubmit={handleSubmit} className="add-bill-form">
        <div className="form-group">
          <label htmlFor="trip_id">Trip ID</label>
          <input
            type="text"
            id="trip_id"
            name="trip_id"
            value={billData.trip_id}
            onChange={handleChange}
            required
            disabled={!!tripId} // Disable if tripId is passed as a prop
          />
        </div>

        <div className="form-group">
          <label htmlFor="payer_id">Payer ID</label>
          <input
            type="text"
            id="payer_id"
            name="payer_id"
            value={billData.payer_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={billData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={billData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={billData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="submit-button">
          Add Bill
        </button>
      </form>
    </div>
  );
};

export default AddBill;
