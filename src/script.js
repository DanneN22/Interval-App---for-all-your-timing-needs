let timerInterval;
let timerSeconds = 0; 
let isRunning = false;

document.getElementById('startBtn').onclick = function() {
    if (!isRunning) {
        const inputMinutes = document.getElementById('inputMinutes').value;
        timerSeconds = inputMinutes * 60; // Konvertera till sekunder
        if (timerSeconds > 0) {
            isRunning = true;
            startTimer();
        } else {
            alert("Ange ett giltigt antal minuter.");
        }
    }
};

document.getElementById('stopBtn').onclick = function() {
    clearInterval(timerInterval);
    isRunning = false;
};

document.getElementById('resetBtn').onclick = function() {
    clearInterval(timerInterval);
    resetTimer();
};

// Olika vy-knappar
document.getElementById('showDigitalBtn').onclick = function() {
    hideAllTimers();
    document.getElementById('digitalTimer').style.display = 'block';
};

document.getElementById('showAnalogBtn').onclick = function() {
    hideAllTimers();
    document.getElementById('analogTimer').style.display = 'block';
};

document.getElementById('showVisualBtn').onclick = function() {
    hideAllTimers();
    document.getElementById('visualTimer').style.display = 'block';
};

document.getElementById('showTextBtn').onclick = function() {
    hideAllTimers();
    document.getElementById('textTimer').style.display = 'block';
};

// Funktion för att dölja alla timrar
function hideAllTimers() {
    document.getElementById('digitalTimer').style.display = 'none';
    document.getElementById('analogTimer').style.display = 'none';
    document.getElementById('visualTimer').style.display = 'none';
    document.getElementById('textTimer').style.display = 'none';
}

// Timer-logik
function startTimer() {
    updateDisplays(); // Uppdatera visningar vid starten
    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            updateDisplays();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            alert("Tiden är slut!");
        }
    }, 1000);
}

function resetTimer() {
    timerSeconds = 0;
    updateDisplays();
}

function updateDisplays() {
    updateDigitalDisplay();
    updateAnalogTimer();
    updateVisualTimer();
}

function updateDigitalDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;

    document.getElementById('digitalDisplay').textContent = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    document.getElementById('textTimer').textContent = `Timer: ${timerSeconds} s`;
}

function updateAnalogTimer() {
    const totalSeconds = 60; // 60 sekunder
    const secondsRatio = timerSeconds / totalSeconds;
    
    const secondHand = document.getElementById('secondHand');
    secondHand.style.transform = `rotate(${secondsRatio * 360}deg)`;
}

function updateVisualTimer() {
    const circle = document.getElementById('progressCircle');
    const radius = 80; 
    const circumference = 2 * Math.PI * radius;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (timerSeconds / 60) * circumference;
    circle.style.strokeDashoffset = offset;
}