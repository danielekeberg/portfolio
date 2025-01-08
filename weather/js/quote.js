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

function updateCash() {
    document.getElementById('totalCash').innerHTML = `<h2>$${cash}</h2>`;
}

document.getElementById('spawnCash').addEventListener('click', () => {
    cash += 50;
})

setInterval(updateCash, 5000);
updateCash();