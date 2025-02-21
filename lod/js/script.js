const garenHealthBar = document.getElementById('health-bar');
const garenHealthPoints = document.getElementById('hp');

let garenHP = 100;

let qAd = 7;
let wAd = 2;
let eAd = 5;
let rAd = 14;

let qCd = 12;
let isQCooldown = false;
let wCd = 7;
let isWCooldown = false;
let eCd = 17;
let isECooldown = false;
let rCd = 72;
let isRCooldown = false;

function resetGarenHP() {
    garenHP = 100;
}

function garen() {
    garenHealthBar.style.width = `${garenHP}px`;
    garenHealthPoints.textContent = `${garenHP} HP`;
    if(garenHP <= 0) {
        alert('garen noob');
        resetGarenHP();
        garen();
    }
}

garen();

function q() {
    if(isQCooldown) return;
    
    console.log(qCd);
    garenHP -= qAd;
    garen();

    isQCooldown = true;
    document.getElementById('q').textContent = qCd;
    document.getElementById('q').className = 'cd';
    const cooldown = setInterval(() => {
        qCd--;
        document.getElementById('q').textContent = qCd;
        if(qCd <= 0) {
            clearInterval(cooldown)
            qCd = 12;
            isQCooldown = false;
            document.getElementById('q').textContent = 'Q';
            document.getElementById('q').className = '';
        }
    }, 1000);
}
function w() {
    if(isWCooldown) return;

    console.log(wCd);
    garenHP -= wAd;
    garen();

    isWCooldown = true;
    document.getElementById('w').textContent = wCd;
    document.getElementById('w').className = 'cd';
    const cooldown = setInterval(() => {
        wCd--;
        document.getElementById('w').textContent = wCd;
        if(wCd <= 0) {
            clearInterval(cooldown)
            wCd = 7;
            isWCooldown = false;
            document.getElementById('w').textContent = 'W';
            document.getElementById('w').className = '';
        }
    }, 1000);
}
function eAbility() {
    if(isECooldown) return;

    console.log(eCd);
    garenHP -= eAd;
    garen();

    isECooldown = true;
    document.getElementById('e').textContent = eCd;
    document.getElementById('e').className = 'cd';
    const cooldown = setInterval(() => {
        eCd--;
        document.getElementById('e').textContent = eCd;
        if(eCd <= 0) {
            clearInterval(cooldown)
            eCd = 12;
            isECooldown = false;
            document.getElementById('e').textContent = 'E';
            document.getElementById('e').className = '';
        }
    }, 1000);
}
function r() {
    if(isRCooldown) return;

    console.log(rCd);
    garenHP -= rAd;
    garen();

    isRCooldown = true;
    document.getElementById('r').textContent = rCd;
    document.getElementById('r').className = 'cd';
    const cooldown = setInterval(() => {
        rCd--;
        document.getElementById('r').textContent = rCd;
        if(rCd <= 0) {
            clearInterval(cooldown)
            rCd = 12;
            isRCooldown = false;
            document.getElementById('r').textContent = 'R';
            document.getElementById('r').className = '';
        }
    }, 1000);
}

document.getElementById('q').addEventListener('click', q);
document.addEventListener('keydown', (e) => {
    if(e.key === 'q') {
        console.log('asdasd')
        q();
    }
})
document.addEventListener('keydown', (e) => {
    if(e.key === 'w') {
        console.log('asdasd')
        w();
    }
})
document.addEventListener('keydown', (e) => {
    if(e.key === 'e') {
        console.log('eee')
        eAbility();
    }
})
document.addEventListener('keydown', (e) => {
    if(e.key === 'r') {
        console.log('asdasd')
        r();
    }
})

function keylogging(key) {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const keylogger = document.getElementById('keylogger');

    const uppercase = String(key).toUpperCase();

    const d = document.createElement('div');
    d.className = 'key';
    d.innerHTML = `
    <div class="logger">
        <div class="key">
            <p>Key: ${uppercase}</p>
        </div>
        <div class="time">
            <p>Time: ${hours}:${minutes}:${seconds}</p>
        </div>
    </div>
    `;

    document.getElementById('keylogger').appendChild(d);

    keylogger.scrollTop = keylogger.scrollHeight;
}

document.addEventListener('keydown', (e) => {
    keylogging(e.key);
})

function testTime() {
    const date = new Date("1999-04-08");
    const today = new Date().getTime();
    const currentTime = today - date;

    const years = Math.floor(currentTime / (1000 * 60 * 60 * 24 * 365))
    const days = Math.floor((currentTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((currentTime % (1000 * 60)) / 1000)

    document.getElementById('birth').textContent = `${years} years ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(testTime, 1000)

