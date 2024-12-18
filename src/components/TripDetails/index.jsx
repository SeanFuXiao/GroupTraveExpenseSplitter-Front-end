import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import CommentForm from '../CommentForm';
import * as hootService from '../../services/tripService';

const TripDetails = () => {
    const { id } = useParams();
    const [tripDetails, settripDetails] = useState(null);

    useEffect(() => {
        /*const fetchHoot = async () => {
          const { hoot } = await hootService.showHoot(id);
          setHoot(hoot);
        };*/
        settripDetails({
            id, 
            name: 'London Adventure',
            expenses: [
                { item: 'Dinner', amount: 100, paidBy: "Max", participants: ["Bob", "Luck"]},
                {item: "Hotel", amount: 500, paidBy:"Bob", participants: ["Max", "Luck"] },

            ],
            participants: ["Luck","Max","Bob"],
        });
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


export default TripDetails; 
