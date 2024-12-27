import React, { useEffect, useState } from 'react';
import Timer from 'easytimer.js';
import './Timer.css'; // Se till att filnamnet är korrekt

const TimerComponent = ({ setIsTimerActive }) => {
  const [timer] = useState(new Timer());
  const [timeValues, setTimeValues] = useState(timer.getTimeValues());
  const [isActive, setIsActive] = useState(false);
  const [inputMinutes, setInputMinutes] = useState("");

  useEffect(() => {
    const onSecondsUpdated = () => {
      setTimeValues(timer.getTimeValues());
    };

    const onTargetAchieved = () => {
      alert("Tiden är ute!");
      setIsTimerActive(false);
      setIsActive(false); // Ställ in isActive till false vid tidens slut
    };

    timer.addEventListener('secondsUpdated', onSecondsUpdated);
    timer.addEventListener('targetAchieved', onTargetAchieved);

    return () => {
      timer.stop();
      timer.removeEventListener('secondsUpdated', onSecondsUpdated);
      timer.removeEventListener('targetAchieved', onTargetAchieved);
    };
  }, [timer, setIsTimerActive]);

  const startTimer = () => {
    // Parsear minuter från inputfältet
    const minutes = parseInt(inputMinutes, 10);
    if (!isNaN(minutes) && minutes > 0) {
      timer.start({ countdown: true, startValues: { minutes } });
      setIsActive(true);
    } else {
      alert("Vänligen ange ett giltigt antal minuter.");
    }
  };

  const stopTimer = () => {
    timer.stop();
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <h3>Timer</h3>
      <div className="analog-timer">
        <div className="hand" style={{ transform: `rotate(${timeValues.minutes * 6}deg)` }}></div>
        <div className="hand" style={{ transform: `rotate(${timeValues.seconds * 6}deg)` }}></div>
      </div>
      <div className="digital-timer">
        <h1>{timeValues.toString()}</h1>
      </div>
      <div>
        <input 
          type="number" 
          placeholder="Minuter" 
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)} 
        />
        <button onClick={startTimer}>Starta Timer</button>
        <button onClick={stopTimer} disabled={!isActive}>Stoppa Timer</button>
      </div>
    </div>
  );
};

export default TimerComponent;