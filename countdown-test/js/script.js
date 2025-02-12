const countdown = document.getElementById('countdown');
const lapC = document.getElementById('lap');
let tid = 60;
let lap = 0;

function display() {
    countdown.textContent = tid;
}

function down() {
    tid --;
    countdown.textContent = tid;
    if(tid < 0) {
        lap++;
        lapC.textContent = lap;
        tid = 60;
        countdown.textContent = tid;

    }
}

function start() {
    setInterval(down, 1000);
}

start();
display();

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const mseconds = document.getElementById('mseconds');
let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;

function stopwatch() {
    const newMSeconds = String(msec).padStart(2, '0');
    const newSeconds = String(sec).padStart(2, '0');
    const newMinutes = String(min).padStart(2, '0');
    const newHours = String(hour).padStart(2, '0');
    mseconds.textContent = newMSeconds;
    msec++;
    if(msec >= 60) {
        msec = 0;
        sec++;
        mseconds.textContent = newMSeconds;
        seconds.textContent = newSeconds + ':';
        if(sec >= 60) {
            sec = 0;
            min++;
            seconds.textContent = newSeconds;
            minutes.textContent = newMinutes + ':';;
            if(min >= 60) {
                min = 0;
                hour++;
                minutes.textContent = newMinutes;
                hours.textContent = newHours + ':';;
            }
        }
    }
}

setInterval(stopwatch, 17);

let nedtellingsTid = 0;
let intervalID;
const tidD = document.getElementById('tid');

function nedtelling() {

    tidD.textContent = nedtellingsTid;
    nedtellingsTid--;
    if(nedtellingsTid < 0) {
        clearInterval(intervalID);
        tidD.textContent = 'Times up!'
    }
    
}


document.getElementById('nedtellingBtn').addEventListener('click', () => {
    const lengde = document.getElementById('lengde').value.trim();
    nedtellingsTid = lengde;
    tidD.textContent = nedtellingsTid;

    clearInterval(intervalID);

    intervalID = setInterval(() => {
        nedtelling();
    }, 1000);
})

document.getElementById('lengde').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        const lengde = document.getElementById('lengde').value.trim();
        nedtellingsTid = lengde;
        tidD.textContent = nedtellingsTid;

        clearInterval(intervalID);

        intervalID = setInterval(() => {
            nedtelling();
        }, 1000);
    }
})

let loadingBar = 0;
let fontSize = 16;

function popup() {
    const getNumber = document.getElementById('randomNumber').value;
    if(fontSize > 20) {
        document.getElementById('between').style.fontWeight = '600';
    }
    if(fontSize > 24) {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        document.getElementById('between').style.color = `rgb(${red}, ${green}, ${blue})`;
    }
    if(getNumber > 10 || getNumber < 0) {
        fontSize++;
        document.getElementById('between').style.fontSize = fontSize + 'px';
        return;
    }

    const d = document.createElement('div');
    d.className = 'yeah';
    d.innerHTML = `
    <div class="loading">
        <p>Analyzing Data</p>
        <div class="loadingBar">
            <div class="loadingProcess"></div>
        </div>
    </div>`;

    document.getElementById('yeah').appendChild(d);

    
    

    const loadingInterval = setInterval(() => {
        loadingBar++;
        document.querySelector('.loadingProcess').style.width = loadingBar + '%';


        if(loadingBar >= 100) {
            clearInterval(loadingInterval);
            loadingBar = 0;
            d.removeChild(document.querySelector('.loading'));

            d.innerHTML = `
            <div class="selectedNumber">
                <p>The number you were thinking about is ${getNumber}</p>
                <button class="fancyKnapp" id="removePop">Try again!</button>
            </div>`;
            document.getElementById('yeah').appendChild(d);
            document.getElementById('removePop').addEventListener('click', () => {
                document.getElementById('yeah').removeChild(d);
            })
        }
    }, 30);
}

document.getElementById('randomNumber').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        popup();
    }
})
