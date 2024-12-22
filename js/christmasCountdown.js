function updateCountdown() {
    const christmasDate = new Date('December 24, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = christmasDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").style.display = "block";
        document.getElementById("countdown").innerHTML = `
        <h3>Merry Christmas</h3>
        <img src="https://i.ibb.co/R0stmmx/cdf3d7d593fdc35913e57edd1d8b182b.png">
        `;
    }
}

const timer = setInterval(updateCountdown, 1000);

updateCountdown();