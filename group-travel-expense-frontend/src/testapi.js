const API_BASE_URL = 'http://localhost:5173/api';


/**
 * Add a new trip.
 * @param {Object} tripData - The trip data to add.
 * @param {string} authToken - The authentication token for the request.
 * @returns {Promise<Object>} - The response from the server.
 */
export const addTrip = async (tripData, authToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/trips`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`, // Include token if required
        },
        body: JSON.stringify(tripData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add trip: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error adding trip:', error);
      throw error;
    }
  };
  
  /**
   * Add a new participant to a trip.
   * @param {Object} participantData - The participant data to add.
   * @param {string} authToken - The authentication token for the request.
   * @returns {Promise<Object>} - The response from the server.
   */
  export const addParticipant = async (participantData, authToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/participants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`, // Include token if required
        },
        body: JSON.stringify(participantData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add participant: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error adding participant:', error);
      throw error;
    }
  };
  
  /**
   * Add a new bill to a trip.
   * @param {Object} billData - The bill data to add.
   * @param {string} authToken - The authentication token for the request.
   * @returns {Promise<Object>} - The response from the server.
   */
  export const addBill = async (billData, authToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bills`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`, // Include token if required
        },
        body: JSON.stringify(billData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add bill: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error adding bill:', error);
      throw error;
    }
  };