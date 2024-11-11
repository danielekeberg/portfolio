const cashMoney = document.getElementById("cashMoney");
const rouletteDisplay = document.getElementById("rouletteDisplay")
const rouletteScreen = document.getElementById("displayScreen");
const submitRoulette = document.getElementById("submitRoulette");

let totalPenger = 1000000;

function roulette() {
    const inputNumber = document.getElementById("inputNumber");
    const rouletteInput = parseInt(inputNumber.value, 10);
    const rouletteMath = Math.floor(Math.random() * 39);
    rouletteDisplay.style.color = "#333";
    rouletteDisplay.style.backgroundColor = "#acacac";
    rouletteScreen.style.backgroundColor = "#acacac";

    if (pengeCounter <= 0) {
        rouletteDisplay.style.color = "#ad5151";
        rouletteDisplay.style.fontSize = "18px";
        rouletteDisplay.textContent = "Du har ikke nok penger";
    } else {
        if (rouletteInput > 38 || rouletteInput < 0 || isNaN(rouletteInput)) {
            rouletteDisplay.style.color = "#ad5151";
            rouletteDisplay.style.fontSize = "20px";
            rouletteDisplay.textContent = `Velg et tall mellom 0-38`;
        } else {
            if (rouletteMath === 0) {
                rouletteDisplay.style.backgroundColor = "#a1d99b";
                rouletteScreen.style.backgroundColor = "#a1d99b";
            } else if (rouletteMath % 2 === 0) {
                rouletteDisplay.style.backgroundColor = "#222222";
                rouletteScreen.style.backgroundColor = "#222222";
                rouletteDisplay.style.color = "#BDBDBD";
            } else {
                rouletteDisplay.style.backgroundColor = "#ca6666";
                rouletteScreen.style.backgroundColor = "#ca6666";
            }

            if (rouletteMath == rouletteInput) {
                pengeCounter += 3500000;
                localStorage.setItem("pengeCounter", pengeCounter);
                rouletteDisplay.textContent = `Hjulet landet på: ${rouletteMath}`;
                pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
                cashMoney.textContent = `Penger: ${pengeCounter}`;
                console.log(rouletteMath);
                console.log("Du vinner");
            } else {
                pengeCounter -= 100000;
                localStorage.setItem("pengeCounter", pengeCounter);
                rouletteDisplay.textContent = `Hjulet landet på: ${rouletteMath}`;
                pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
                cashMoney.textContent = `Penger: ${pengeCounter}`;
                console.log(rouletteMath);
                console.log("Du taper");
                console.log(rouletteMath.length);
            }
        }
    }
}

submitRoulette.addEventListener("click", roulette);
submitRoulette.addEventListener("click", updatePenger);