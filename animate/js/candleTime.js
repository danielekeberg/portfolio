function candleTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    document.getElementById('candleTime').textContent = `${hours}:${minutes}:${seconds}`;
}

candleTime();
setInterval(candleTime, 1000);

function candleTimeColor() {
    const candle = document.getElementById('candleTime');
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    candle.style.color = `rgb(${red}, ${green}, ${blue})`;
}

candleTimeColor();
setInterval(candleTimeColor, 1000);