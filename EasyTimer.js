document.getElementById('loading-screen').addEventListener('click', function() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('set-timer-screen').style.display = 'block';
  });
  
  document.getElementById('start-timer').addEventListener('click', function() {
    const minutes = parseInt(document.getElementById('minutes-input').value) || 0;
    const isInterval = document.getElementById('interval-checkbox').checked;
    const isPause = document.getElementById('pause-checkbox').checked;
  
    startTimer(minutes, isInterval, isPause);
  });
  
  function startTimer(minutes, isInterval, isPause) {
    const timer = new easytimer.Timer();
    
    // Startar timern
    timer.start({countdown: true, startValues: {minutes: minutes}});
    
    // Uppdaterar digital klocka
    timer.addEventListener('secondsUpdated', function() {
      document.getElementById('digital-time').innerText = timer.getTimeValues().toString();
    });
  
    // När timern är slut
    timer.addEventListener('targetAchieved', function() {
      document.getElementById('set-timer-screen').style.display = 'none';
      document.getElementById('alarm-screen').style.display = 'block';
  
      if (isInterval) {
        setTimeout(() => {
          if (isPause) {
            // Lägg till 5 minuters paus innan nästa intervall
            setTimeout(() => startTimer(minutes, isInterval, isPause), 5 * 60 * 1000);
          } else {
            startTimer(minutes, isInterval, isPause);
          }
        }, 1000); // Vänta 1 sekund innan nästa intervall
      }
    });
  
    document.getElementById('timer-screen').style.display = 'block';
    document.getElementById('set-timer-screen').style.display = 'none';
  }
  