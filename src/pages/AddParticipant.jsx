import React, { useState } from 'react';

function AddParticipants() {
  const [participant, setParticipant] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleAddParticipant = () => {
    setParticipants([...participants, participant]);
    setParticipant('');
  };

  return (
    <div>
      <h2>Add Participants</h2>
      <input
        type="text"
        placeholder="Enter participant's name"
        value={participant}
        onChange={(e) => setParticipant(e.target.value)}
      />
      <button onClick={handleAddParticipant}>Add Participant</button>

      <h3>Participants:</h3>
      <ul>
        {participants.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddParticipants;