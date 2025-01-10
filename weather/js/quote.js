const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it.",
    "Great things never come from comfort zones."
  ];

let quoteCount = 0;

  function randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomNumber];
    document.getElementById('quoteCounter').innerHTML = `<p>You have generated <span>${quoteCount + 1}</span> random quotes</p>`;
    quoteCount++;
  }

  document.getElementById('quoteBtn').addEventListener('click', randomQuote);


document.getElementById('pwrdBtn').addEventListener('click', () => {
    if (document.getElementById('pwrd').type === 'password') {
        document.getElementById('pwrd').type = 'text';
        document.getElementById('pwrdBtn').textContent = '-';
    } else {
        document.getElementById('pwrd').type = 'password';
        document.getElementById('pwrdBtn').textContent = 'O';
    }
})

document.getElementById('changeClr').addEventListener('click', () => {
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
})

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').innerHTML = `<h2>${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();

function randomBackgroundColor() {
    const rndmClr = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = rndmClr;
}

// setInterval(randomBackgroundColor, 2000);
// randomBackgroundColor();

let cash = 100;
let countdownTime = 5;

function countdown() {
    countdownTime--;
    document.getElementById('spawnCash').textContent = `+$50 (Checks in ${countdownTime} second)`;
    if (countdownTime < 1) {
        countdownTime = 6;
    }
}

setInterval(countdown, 1000);

function updateCash() {
    document.getElementById('totalCash').innerHTML = `<h2>$${cash}</h2>`;
}

document.getElementById('spawnCash').addEventListener('click', () => {
    cash += 50;
})

function customCash() {
    const cashInput = document.getElementById('inputCash').value;
    const cashInputNumber = Number(cashInput);

    cash += cashInputNumber;
    updateCash();
}

function removeCustomCash() {
    const cashInput = document.getElementById('negativeInputCash').value;
    const cashInputNumber = Number(cashInput);

    cash -= cashInputNumber;
    updateCash();
}

document.getElementById('spawnCustomCash').addEventListener('click', customCash);
document.getElementById('inputCash').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        customCash();
    }
})
document.getElementById('negativeInputCash').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        removeCustomCash();
    }
})
document.getElementById('removeCustomCash').addEventListener('click', removeCustomCash);

setInterval(updateCash, 6000);
updateCash();

// function party() {
//     if (cash >= 10000) {
//         setInterval(randomBackgroundColor, 1000);
//     } else {
//         document.body.style.backgroundColor = '#181818';
//     }
// }

// setInterval(party, 1000);

// function roulette() {
//     const spinRoulette = Math.floor(Math.random() * 38);
//     const rouletteDisplay = document.getElementById('rouletteDisplay');
//     const rouletteInput = document.getElementById('rouletteInput');
//     cash -= 1000;
//     updateCash();

//     if (spinRoulette === 0) {
//         rouletteDisplay.style.backgroundColor = 'green';
//         rouletteDisplay.innerHTML = `<h2>${spinRoulette}</h2>`;
//         if (rouletteInput === spinRoulette) {
//             cash += 38000;
//             updateCash();
//             document.body.style.backgroundColor = 'green';
//         }
//     } if (spinRoulette % 2 === 0) {
//         rouletteDisplay.style.backgroundColor = 'red';
//         rouletteDisplay.innerHTML = `<h2>${spinRoulette}</h2>`;
//         if (rouletteInput === spinRoulette) {
//             cash += 38000;
//             updateCash();
//             document.body.style.backgroundColor = 'green';
//         }
//     } else {
//         rouletteDisplay.style.backgroundColor = 'black';
//         rouletteDisplay.innerHTML = `<h2>${spinRoulette}</h2>`;
//         if (rouletteInput === spinRoulette) {
//             cash += 38000;
//             updateCash();
//             document.body.style.backgroundColor = 'green';
//         }
//     }
// }

// document.getElementById('roulette-btn').addEventListener('click', roulette);

function roulette() {
    const rouletteInput = document.getElementById('rouletteInput');
    const userBet = parseInt(rouletteInput.value, 10);
    const spinRoulette = Math.floor(Math.random() * 39);
    const rouletteDisplay = document.getElementByIde('rouletteDisplay');

    if (isNaN(userBet) || userBet < 0 || userBet > 38) {
        alert("Please enter a valid number between 0 and 38!");
        return;
    }

    cash -= 1000;
    updateCash();

    if (spinRoulette === 0) {
        rouletteDisplay.style.backgroundColor = 'green';
    } else if (spinRoulette % 2 === 0) {
        rouletteDisplay.style.backgroundColor = 'black';
    } else {
        rouletteDisplay.style.backgroundColor = 'red';
    }

    rouletteDisplay.innerHTML = `<h2>${spinRoulette}</h2>`;

    if (userBet === spinRoulette) {
        cash += 36000;
        alert(`You won! The roulette landed on ${spinRoulette}`);
    } else {
        alert(`You lost! The roulette landed on ${spinRoulette}`);
    }

    updateCash();
}

document.getElementById('roulette-btn').addEventListener('click', roulette);