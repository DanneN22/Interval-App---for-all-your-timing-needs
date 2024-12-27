// src/components/AlarmView.js
import React from 'react';

function AlarmView({ onReset }) {
  return (
    <div className="alarm-view">
      <h2>Time's Up!</h2>
      <button onClick={onReset}>Back to Set Timer</button>
    </div>
  );
}

export default AlarmView;
