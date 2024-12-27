import React, { useState } from 'react';

function SetTimer({ onSetTimer }) {
  const [minutes, setMinutes] = useState(0);

  const handleStart = () => {
    if (minutes > 0) {
      onSetTimer(minutes); // Kallar på onSetTimer-funktionen i App.js med angivna minuter
    } else {
      alert("Ange ett giltigt antal minuter!");
    }
  };

  return (
    <div className="set-timer">
      <h2>Set Timer</h2>
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
        placeholder="Minutes"
      />
      <button onClick={handleStart}>Start Timer</button>
    </div>
  );
}

export default SetTimer;
