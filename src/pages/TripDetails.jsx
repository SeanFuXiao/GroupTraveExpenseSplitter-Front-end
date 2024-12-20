import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
//import CommentForm from '../CommentForm/CommentForm';

//import { getTripDetails } from '../../services/tripService';


function TripDetails() {
    const { id } = useParams();
    const [trip, setTrip] = useState(null);
    const [expenses, setExpenses] = useState([]);
  
    useEffect(() => {
      const fetchTripDetails = async () => {
        const response = await TripService.getTripDetails(id);
        setTrip(response.data);
        setExpenses(response.data.expenses);
      };
      fetchTripDetails();
    }, [id]);
  
    return (
      <div className="trip-details">
        {trip && (
          <>
            <h2>{trip.name}</h2>
            <p>{trip.location}</p>
            <h3>Expenses</h3>
            <ul>
              {expenses.map((expense) => (
                <li key={expense.id}>
                  {expense.name}: ${expense.amount}
                </li>
              ))}
            </ul>
            <AddBill tripId={id} />
          </>
        )}
      </div>
    );
  }

  

/*const TripDetails = () => {
    const { id } = useParams();
    const [tripDetails, setTripDetails] = useState(null);

    useEffect(() => {
        async function fetchTripDetails () {
            const details = await getTripDetails(id);
        
        /*const fetchHoot = async () => {
          const { hoot } = await hootService.showHoot(id);
          setHoot(hoot);
        };
        setTripDetails({
            id, 
            name: 'London Adventure',
            expenses: [
                { item: 'Dinner', amount: 100, paidBy: "Max", participants: ["Bob", "Luck"]},
                {item: "Hotel", amount: 500, paidBy:"Bob", participants: ["Max", "Luck"] },

            ],
            participants: ["Luck","Max","Bob"],
        });
      }
    }, [id]);
      if (!tripDetails) return <div> hold on loading </div>;
     
      return (
        <div> <h2>{tripDetails.name} - Expenses</h2> 
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Amout</th>
                    <th>Paid By</th>
                    <th>Participants</th>
                </tr>
            </thead>
            <tbody>
                {tripDetails.expenses.map((expense,idx) => (
                    <tr key={idx}>
                        <td>{expense.item}</td>
                        <td>${expense.amount}</td>
                        <td>{expense.PaidBy}</td>
                        <td>{expense.participants.join(", ")}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Link to={`/add-expense/${id}`}>Add Expense </Link>
        </div>
      );

    };
*/

export default TripDetails; 