// src/components/DigitalTimer.js
import React, { useEffect, useState } from 'react';

function DigitalTimer({ timer, onReset }) {
  const [time, setTime] = useState(timer.getTimeValues());

  useEffect(() => {
    timer.addEventListener('secondsUpdated', () => {
      setTime(timer.getTimeValues());
    });
    timer.addEventListener('targetAchieved', onReset);
  }, [timer, onReset]);

  return (
    <div className="digital-timer">
      <h2>Digital Timer</h2>
      <p>{time.minutes}:{time.seconds}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default DigitalTimer;
