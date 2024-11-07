const cashMoney = document.getElementById("cashMoney");
const rouletteDisplay = document.getElementById("rouletteDisplay")
const submitRoulette = document.getElementById("submitRoulette");

let totalPenger = 1000000;

function roulette() {
    const inputNumber = document.getElementById("inputNumber");
    const rouletteInput = inputNumber.value;
    const rouletteMath = Math.floor(Math.random() * 37);

    if (pengeCounter === 0) {
        rouletteDisplay.style.color = "#ad5151";
        rouletteDisplay.style.fontSize = "18px";
        rouletteDisplay.textContent = "Du har ikke nok penger";
    } else {
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
        }
    }
}

submitRoulette.addEventListener("click", roulette);
submitRoulette.addEventListener("click", updatePenger);