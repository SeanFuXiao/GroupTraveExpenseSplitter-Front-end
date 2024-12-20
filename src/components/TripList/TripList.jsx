import React from 'react';
import { Link } from 'react-router-dom';
//import { getTrips } from "../../services/tripService";

const TripList = () => {
  const [trips, setTrips]= useState([]); //useContext(AuthedUserContext);
   
   useEffect(() => {
    setTrips([
      { id: 1, name: 'London Adventure', total: 1300, participants: 3},
      { id: 2, name: 'Italy Road Trip', total: 400, participats: 4},
    
     
    ]);
   }, []);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        <div> 
          <h2>Your Trips</h2>
          <button>
            <Link to='/add-trip'>Add A New Trip</Link>
          </button>
          <table>
            <thead>
              <tr>
                <th>Trip Name</th>
                <th>Total Expenses</th>
                <th>Participants</th>
                <th>Details</th>

              </tr>
            </thead>
         
          <tbody>
          {trips.map((trip) => (
            <tr key={trip.id}>
              <td>{trip.name}</td>
              <td>${trip.total}</td>
              <td>{trip.participants}</td>
              <td>
                <Link to={`/trip/${trip.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
          </tbody>
          </table>
        </div>
      </p>
    </main>
  );
};

export default TripList;





/*const HootList = (props) => {
    console.log(props);
    return (
        <main>
             {props.hoots.map((hoot) => {
        return (
          <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
            <article>
              <header>
                <h2>{hoot.title}</h2>
                <p>
                  {hoot.author.username} posted on{" "}
                  {new Date(hoot.createdAt).toLocaleDateString()}
                </p>
              </header>
              <p>{hoot.text}</p>
            </article>
          </Link>
        );
      })}
        </main>
    )
} */






