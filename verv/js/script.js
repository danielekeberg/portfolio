let defaultMin = 10;
let defaultSec = 0;
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
let vCounter = localStorage.getItem('vCounter') ? parseInt(localStorage.getItem('vCounter')) : 0;
let v5Counter = localStorage.getItem('v5Counter') ? parseInt(localStorage.getItem('v5Counter')) : 0;
let pageViews = localStorage.getItem('views') ? parseInt(localStorage.getItem('views')) : 0;

function startTimer() {
    document.title = 'Vervetimer';
    document.querySelector("link[rel~='icon']").href = './assets/clock-blue.svg';
    document.getElementById('min').textContent = String(defaultMin).padStart(2, '0');
    document.getElementById('sec').textContent = String(defaultSec).padStart(2, '0');
    document.getElementById('mid').textContent = ':';
    document.getElementById('restartBtn').style.display = 'none';
    document.body.style.backgroundColor = '#050505';
    const timer = setInterval(() => {
        defaultSec--;
        if(defaultSec < 0) {
            defaultMin--;
            defaultSec = 59;
        }
        if(defaultMin < 0) {
            clearInterval(timer);
            defaultMin = 10;
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

function hamburger() {
    if(document.querySelector('.stat')) {
        document.querySelector('.stat').remove();
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
        <p>Antall minutter oppdatert: <strong>${counter * 5}</strong></p>
        <p>Antall timer oppdatert: <strong>${(counter * 5 / 60).toFixed(1)}</strong></p>
        <div class="nyVerv">
            <p>Antall verver: <strong id="totalVerv">${vCounter}</strong></p>
            <div class="verver">
                <p id="removeVerv">-1</p>
                <p id="addVerv">+1</p>
            </div>
        </div>
        <div class="nyVerv">
            <p>Antall verver oppdrag 5: <strong id="total5Verv">${v5Counter}</strong></p>
            <div class="verver">
                <p id="remove5Verv">-1</p>
                <p id="add5Verv">+1</p>
            </div>
        </div>
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

    document.getElementById('add5Verv').addEventListener('click', () => {
        v5Counter++;
        localStorage.setItem('v5Counter', v5Counter);
        document.getElementById('total5Verv').textContent = v5Counter;
    });

    document.getElementById('remove5Verv').addEventListener('click', () => {
        v5Counter--;
        localStorage.setItem('v5Counter', v5Counter);
        document.getElementById('total5Verv').textContent = v5Counter;
    });
}

document.getElementById('hamburger').addEventListener('click', () => {
    hamburger();
});

// function profilteller() {
//     pageViews++;
//     localStorage.setItem('views', pageViews);
//     document.getElementById('views').textContent = pageViews;
// }

// window.onload = () => {
//     profilteller();
// }

function clock() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, 0);
    const minute = String(now.getMinutes()).padStart(2, 0);
    const second = String(now.getSeconds()).padStart(2, 0);

    document.getElementById('clock').textContent = `${hour}:${minute}:${second}`

    if(now.getHours() === 1 && now.getMinutes() === 2 && now.getSeconds() === 20) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "#050505";
    }
}

clock();
setInterval(clock, 1000);