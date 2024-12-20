import { useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

function AddExpense({ tripId }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      await TripService.addExpense(tripId, { name, amount });
      setName('');
      setAmount('');
    } catch (err) {
      setError('Error adding expense, please try again.');
    }
  };

  return (
    <div className="add-expense">
      <h3>Add Expense</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
}


/*const AddExpense = () => {
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
*/
export default AddExpense; 