let defaultMin = 5;
let defaultSec = 0;
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
let vCounter = localStorage.getItem('vCounter') ? parseInt(localStorage.getItem('vCounter')) : 0;

function startTimer() {
    document.title = 'Vervetimer';
    document.querySelector("link[rel~='icon']").href = './assets/clock-blue.svg';
    document.getElementById('min').textContent = String(defaultMin).padStart(2, '0');
    document.getElementById('sec').textContent = String(defaultSec).padStart(2, '0');
    document.getElementById('mid').textContent = ':';
    document.getElementById('restartBtn').style.display = 'none';
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
            // randomBackground();
            document.getElementById('restartBtn').style.display = 'block';
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

function randomBackground() {
    const randomClr = setInterval(() => {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
    }, 500);

    document.getElementById('restartBtn').addEventListener('click', () => {
        clearInterval(randomClr);
    })
}

const maxCount = 150;
let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;;

function clubCounter() {
    count++;
    localStorage.setItem('count', count);
    const percent = Math.round((count / maxCount) * 100);
    document.querySelector('.club-progress').style.width = percent + '%';
    document.getElementById('club-counter').textContent = count + ' / ' + maxCount + ' (' + percent + '%)';
}

function minusClubCounter() {
    count--;
    localStorage.setItem('count', count);
    const percent = Math.round((count / maxCount) * 100);
    document.querySelector('.club-progress').style.width = percent + '%';
    document.getElementById('club-counter').textContent = count + ' / ' + maxCount + ' (' + percent + '%)';
}

function loadClubCounter() {
    const percent = Math.round((count / maxCount) * 100);

    document.querySelector('.club-progress').style.width = percent + '%';
    document.getElementById('club-counter').textContent = count + ' / ' + maxCount + ' (' + percent + '%)';
}

loadClubCounter();

document.getElementById('plussClub').addEventListener('click', () => {
    clubCounter();
    document.querySelector('.club-bar').style.backgroundColor = 'green';
    setTimeout(() => {
        document.querySelector('.club-bar').style.background = 'none';
    }, 100)
});
document.getElementById('minusClub').addEventListener('click', () => {
    minusClubCounter();
    document.querySelector('.club-bar').style.backgroundColor = 'red';
    setTimeout(() => {
        document.querySelector('.club-bar').style.background = 'none';
    }, 100)
});

function hamburger() {
    if(document.querySelector('.stat')) {
        return;
    }

    const d = document.createElement('div');
    d.className = 'stat';
    d.innerHTML = `
    <div class="stat-header" id="stat-header">
        <h3>Statistikk</h3>
    </div>
    <div class="verv-stats">
        <p>Antall oppdateringer: <strong>${counter}</strong></p>
        <div class="nyVerv">
            <p>Antall verver: <strong id="totalVerv">${vCounter}</strong></p>
            <div class="verver">
                <p id="removeVerv">-1</p>
                <p id="addVerv">+1</p>
            </div>
        </div>
        <p>Antall verver oppdrag 5: <strong>0</strong></p>
    </div>
    `;

    document.getElementById('stats').appendChild(d);
    document.getElementById('stat-header').addEventListener('click', () => {
        document.querySelector('.stats').removeChild(d);
        d = null;
    });

    document.getElementById('addVerv').addEventListener('click', () => {
        vCounter++;
        localStorage.setItem('vCounter', vCounter);
        document.getElementById('totalVerv').textContent = vCounter;
    });

    document.getElementById('removeVerv').addEventListener('click', () => {
        vCounter--;
        localStorage.setItem('vCounter', vCounter);
        document.getElementById('totalVerv').textContent = vCounter;
    });
}

document.getElementById('hamburger').addEventListener('click', () => {
    hamburger();
});



