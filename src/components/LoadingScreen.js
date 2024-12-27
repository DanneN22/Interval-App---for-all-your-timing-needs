// src/components/LoadingScreen.js
import React from 'react';

function LoadingScreen({ onStart }) {
  return (
    <div className="loading-screen" onClick={onStart}>
      <h1>Interval App</h1>
      <p>For all your timing needs</p>
    </div>
  );
}

export default LoadingScreen;
