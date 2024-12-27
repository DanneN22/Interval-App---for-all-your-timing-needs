// src/App.js
import React, { useState } from 'react';
import Timer from 'easytimer.js';
import LoadingScreen from './components/LoadingScreen';
import SetTimer from './components/SetTimer';
import AnalogTimer from './components/AnalogTimer';
import DigitalTimer from './components/DigitalTimer';
import TextTimer from './components/TextTimer';
import AlarmView from './components/AlarmView';

function App() {
  const [view, setView] = useState('loading'); // Byter vy mellan de olika komponenterna
  const [timer] = useState(new Timer());

  // Hantera vy-byte och återställning av timern
  const handleSetTimer = (minutes) => {
    timer.start({ countdown: true, startValues: { minutes } });
    setView('analog');
  };

  const resetTimer = () => {
    timer.stop();
    setView('setTimer');
  };

  return (
    <div className="App">
      {view === 'loading' && <LoadingScreen onStart={() => setView('setTimer')} />}
      {view === 'setTimer' && <SetTimer onSetTimer={handleSetTimer} />}
      {view === 'analog' && <AnalogTimer timer={timer} onReset={resetTimer} />}
      {view === 'digital' && <DigitalTimer timer={timer} onReset={resetTimer} />}
      {view === 'text' && <TextTimer timer={timer} onReset={resetTimer} />}
      {view === 'alarm' && <AlarmView onReset={resetTimer} />}
    </div>
  );
}

export default App;
