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
        document.getElementById("countdown").style.display = "block";
        document.getElementById("countdown").innerHTML = `
        <h3>Happy Birthday</h3>
        `;
    }
}

const timer = setInterval(updateCountdown, 1000);
const birthdayTimer = setInterval(updateBirthdayCountdown, 1000);

updateCountdown();