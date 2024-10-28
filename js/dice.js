const diceButton = document.getElementById("diceButton");

// Dice Images
const diceOne = document.getElementById("diceOne");
const diceTwo = document.getElementById("diceTwo");
const diceThree = document.getElementById("diceThree");
const diceFour = document.getElementById("diceFour");
const diceFive = document.getElementById("diceFive");
const diceSix = document.getElementById("diceSix");

let diceP = document.getElementById("diceP");

function dice() {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    diceOne.src = `../src/dice-six-faces-${diceNumber}.png`

    // if(diceNumber === 1) {
    //     diceOne.src = "../src/dice-six-faces-one.png"
    // }
    // if(diceNumber === 2) {
    //     diceOne.src = "../src/dice-six-faces-two.png"
    // }
    // if(diceNumber === 3) {
    //     diceOne.src = "../src/dice-six-faces-three.png"
    // }
    // if(diceNumber === 4) {
    //     diceOne.src = "../src/dice-six-faces-four.png"
    // }
    // if(diceNumber === 5) {
    //     diceOne.src = "../src/dice-six-faces-five.png"
    // }
    // if(diceNumber === 6) {
    //     diceOne.src = "../src/dice-six-faces-six.png"
    // }

    // if (diceNumber === 1) {
    //     diceOne.style.display = "flex";
    //     diceTwo.style.display = "none";
    //     diceThree.style.display = "none";
    //     diceFour.style.display = "none";
    //     diceFive.style.display = "none";
    //     diceSix.style.display = "none";
    // } 
    // if (diceNumber === 2) {
    //     diceOne.style.display = "none";
    //     diceTwo.style.display = "flex";
    //     diceThree.style.display = "none";
    //     diceFour.style.display = "none";
    //     diceFive.style.display = "none";
    //     diceSix.style.display = "none";
    // }
    // if (diceNumber === 3) {
    //     diceOne.style.display = "none";
    //     diceTwo.style.display = "none";
    //     diceThree.style.display = "flex";
    //     diceFour.style.display = "none";
    //     diceFive.style.display = "none";
    //     diceSix.style.display = "none";
    // }
    // if (diceNumber === 4) {
    //     diceOne.style.display = "none";
    //     diceTwo.style.display = "none";
    //     diceThree.style.display = "none";
    //     diceFour.style.display = "flex";
    //     diceFive.style.display = "none";
    //     diceSix.style.display = "none";
    // }
    // if (diceNumber === 5) {
    //     diceOne.style.display = "none";
    //     diceTwo.style.display = "none";
    //     diceThree.style.display = "none";
    //     diceFour.style.display = "none";
    //     diceFive.style.display = "flex";
    //     diceSix.style.display = "none";
    // }
    // if (diceNumber === 6) {
    //     diceOne.style.display = "none";
    //     diceTwo.style.display = "none";
    //     diceThree.style.display = "none";
    //     diceFour.style.display = "none";
    //     diceFive.style.display = "none";
    //     diceSix.style.display = "flex";
    // }
}

diceButton.addEventListener("click", dice);