// src/components/AnalogTimer.js
import React, { useEffect, useState } from 'react';

function AnalogTimer({ timer, onReset }) {
  const [time, setTime] = useState(timer.getTimeValues());

  useEffect(() => {
    timer.addEventListener('secondsUpdated', () => {
      setTime(timer.getTimeValues());
    });
    timer.addEventListener('targetAchieved', onReset);
  }, [timer, onReset]);

  return (
    <div className="analog-timer">
      <h2>Analog Timer</h2>
      <p>{time.minutes}:{time.seconds}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default AnalogTimer;
