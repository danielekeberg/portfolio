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

function updateBirthdayCountdown() {
    const birthday = new Date('April 8, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const birthdayTimeLeft = birthday - now;

    const days = Math.floor(birthdayTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((birthdayTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((birthdayTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((birthdayTimeLeft % (1000 * 60)) / 1000);

    document.getElementById("birthdayDays").textContent = days;
    document.getElementById("birthdayHours").textContent = hours;
    document.getElementById("birthdayMinutes").textContent = minutes;
    document.getElementById("birthdaySeconds").textContent = seconds;

    if (birthdayTimeLeft < 0) {
        clearInterval(birthdayTimer);
        document.getElementById("birthdayCountdown").style.display = "block";
        document.getElementById("birthdayCountdown").innerHTML = `
        <h3>Happy Birthday</h3>
        `;
    }
}

function updateNextChristmas() {
    const nextChristmas = new Date('December 24, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const nextTimeLeft = nextChristmas - now;

    const days = Math.floor(nextTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((nextTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((nextTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((nextTimeLeft % (1000 * 60)) / 1000);

    document.getElementById("2025days").textContent = days;
    document.getElementById("2025hours").textContent = hours;
    document.getElementById("2025minutes").textContent = minutes;
    document.getElementById("2025seconds").textContent = seconds;

    if (nextTimeLeft < 0) {
        clearInterval(nextTimer);
        document.getElementById("2025countdown").style.display = "block";
        document.getElementById("2025countdown").innerHTML = `
        <h3>Merry Christmas</h3>
        <img src="https://i.ibb.co/R0stmmx/cdf3d7d593fdc35913e57edd1d8b182b.png">
        `;
    }
}

const timer = setInterval(updateCountdown, 1000);
const birthdayTimer = setInterval(updateBirthdayCountdown, 1000);
const nextTimer = setInterval(updateNextChristmas, 1000);

updateCountdown();
updateBirthdayCountdown();
updateBirthdayCountdown();

const loading = document.getElementById("loading");
const content = document.getElementById("content");

function fetchData() {
    loading.style.display = 'block';
    content.style.display = 'none';

    setTimeout(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 2000)
}

fetchData();