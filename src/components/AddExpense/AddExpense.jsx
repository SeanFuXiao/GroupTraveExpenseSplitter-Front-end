import { useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

const AddExpense = () => {
  const { tripId } = useParams();
    const navigate = useNavigate();
    const [expense, setExpense] = useState({
        item: "",
        amount: "",
        paidBy: "",
        participants: []

    });

    const handleChange = (evt) => {
      const { name, value } = e.target;
      setExpense((prev) => ({ ...prev, [name]: value }));

    };
      const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log("Adding Expense:", expense);
        /*const newHoot = await hootService.create(formData);
        if (newHoot) {
          props.addNewHoot(newHoot);*/

          navigate(`/trip/${tripId}`);
      };

return (
  <div>
    <h2>Add Expense to Trip {tripId}</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Expense Name: 
        <input type="number" name="amount" value={expense.amount} onChange={handleChange} required />

      </label>
      <label>
        Paid By:
        <input type="text" name="paidBy" value={expense.paidBy} onChange={handleChange} required />
      </label>
      <label>
        Participants (comma-separated):
        <input type="text" name="participants" value={expense.participants} onChange={handleChange} />
      </label>
      <buutton type="submit">Add Expense</buutton>
    </form>
  </div>
 
);
};
    /*<main>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="CreatTrip">CreatTrip</option>
          <option value="TotalCost">TotalCost</option>
          <option value="Days">Days</option>
          
         
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>*/
export default AddExpense; 
