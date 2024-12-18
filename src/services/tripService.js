const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;


import { getToken } from './authService'

export const fetchTrips = async () => {
  const token = getToken();

  const response = await fetch(`${BACKEND_URL}/trips`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
    },
  });

  const data = await response.json();
  return data;
};







/*const getTrips = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}/hoots`, {
            heasers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,

            },

        });
       /* const trips = await res.json();
        /*console.log(hoots);
        //return hoots;
      } catch (err) {
        console.log(err, " omething wrong");

    }
  }

const showtrip = async (hootId) => {
    try {
        const res = await fetch(`${BACKEND_URL}/hoots/${hootId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
        });
        const hoot = await res.json();
        console.log(hoot);
        return hoot;

    } catch (err) {
        console.log(err, 'something wrong');

    }
};
const create = async (formData) => {
    try {
      const res = await fetch(`${BACKEND_URL}/hoots/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { hoot } = await res.json();
      return hoot;
    } catch (err) {
      console.log(err);
    }
  };
  
  const createComment = async (formData, postId) => {
    try {
      const res = await fetch(`${BACKEND_URL}/hoots/${postId}/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { newComment } = await res.json();
      return newComment;
    } catch (error) {
      console.log(error);
    }
  };


export { getHoots, showHoot, create, createComment };*/

/*export const fetchTrips= async() => {
  return [
    { id:1, name: 'London Adventure', total: 1300, participants: ['']},
    { id:2, name: 'Italy Road Trip', total:300, participants:[""]},

  ]
};
export const fetchTripDetails = async (tripId) => {
  if (tripId === '1') {
    return {
      id: 1,
      name: 'London Adventure',
      expenses: [
        { id: 1, name: 'Dinner', amount: 100 },
        { id: 2, name: 'Hotel', amount: 500 },
      ],
    };
  }
  return null;
};*/