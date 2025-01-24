import { getCurrentPenger, setCurrentPenger, updatePenger } from './script.js';

updatePenger();
setInterval(updatePenger, 60000);

function krig() {
    const krigInput = document.getElementById('krigInput').value;
    const krigWin = krigInput * 2;
    const currentPenger = getCurrentPenger();
    
    const randomCard = Math.floor(Math.random()* 13) + 1;
    const dealerCard = Math.floor(Math.random() * 13) + 1;
    const krigDisplay = document.getElementById('krigResult');
    const krigDiv = document.getElementById('krigDiv');

    if (krigInput < 1000) {
        krigDisplay.textContent = 'Ugyldig beløp. Du må satse minst 1000 kroner.';
        krigDiv.style.backgroundColor = 'red';
        return;
    }

    if (krigInput > 90000000) {
        krigDisplay.textContent = 'For høyt beløp. Maxbet på dette kasinoet er 90 000 000 kr.';
        krigDiv.style.background = 'red';
        return;
    }

    document.getElementById('myCard').src = `../assets/${randomCard}.png`;
    document.getElementById('dealerCard').src = `../assets/${dealerCard}.png`;

    if (randomCard === dealerCard) {
        krigDisplay.textContent = 'Uavgjort.';
        krigDiv.style.backgroundColor = '#181818';
    } else if (randomCard > dealerCard) {
        krigDisplay.textContent = `Du vant ${krigWin} kroner!`;
        krigDiv.style.backgroundColor = 'green';
        setCurrentPenger(currentPenger + krigWin);
    } else if (randomCard < dealerCard) {
        krigDisplay.textContent = 'Du tapte.';
        krigDiv.style.backgroundColor = 'red';
        setCurrentPenger(currentPenger - krigInput);
    }
}

document.getElementById('krigBtn').addEventListener('click', krig);