// src/components/TextTimer.js
import React, { useEffect, useState } from 'react';

function TextTimer({ timer, onReset }) {
  const [time, setTime] = useState(timer.getTimeValues());

  useEffect(() => {
    timer.addEventListener('secondsUpdated', () => {
      setTime(timer.getTimeValues());
    });
    timer.addEventListener('targetAchieved', onReset);
  }, [timer, onReset]);

  return (
    <div className="text-timer">
      <h2>Text Timer</h2>
      <p>{time.minutes} minuter och {time.seconds} sekunder kvar</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default TextTimer;
