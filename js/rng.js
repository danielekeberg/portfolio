const rngButton = document.getElementById("rngButton");
const display = document.getElementById("display");

function RNG() {
    display.style.color = "#000";
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        display.style.fontSize = "14px";
        document.getElementById("display").textContent = "Please enter valid numbers with the minimum less than the maximum.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("display").textContent = `${randomNumber}`;
}

rngButton.addEventListener("click", RNG);