let defaultMin = 5;
let defaultSec = 0;
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

function startTimer() {
    document.title = 'Vervetimer';
    document.querySelector("link[rel~='icon']").href = './assets/clock-blue.svg';
    document.getElementById('min').textContent = String(defaultMin).padStart(2, '0');
    document.getElementById('sec').textContent = String(defaultSec).padStart(2, '0');
    document.getElementById('mid').textContent = ':';
    document.getElementById('restartBtn').style.opacity = '0';
    document.body.style.backgroundColor = '#121212';
    const timer = setInterval(() => {
        defaultSec--;
        if(defaultSec < 0) {
            defaultMin--;
            defaultSec = 59;
        }
        if(defaultMin < 0) {
            clearInterval(timer);
            defaultMin = 5;
            defaultSec = 0;
            document.getElementById('min').textContent = 'Oppdater nye spillere';
            document.getElementById('sec').textContent = '';
            document.getElementById('mid').textContent = '';
            document.querySelector("link[rel~='icon']").href = './assets/clock-red.svg';
            document.body.style.backgroundColor = 'green';
            document.getElementById('restartBtn').style.opacity = '1';
            document.title = '(1) Oppdater!';
            counter++;
            localStorage.setItem('counter', counter);
            document.getElementById('counter').textContent = 'Antall oppdateringer: ' + counter;
            return;
        }

        document.getElementById('min').textContent = String(defaultMin).padStart(2, '0');
        document.getElementById('sec').textContent = String(defaultSec).padStart(2, '0');

    }, 1000);
}

document.getElementById('restartBtn').addEventListener('click', () => {
    document.getElementById('min').textContent = defaultMin;
    document.getElementById('sec').textContent = defaultSec;
    startTimer();
});

function loadCounter() {
    document.getElementById('counter').textContent = 'Antall oppdateringer: ' + counter;
}

loadCounter();