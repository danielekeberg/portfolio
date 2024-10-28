const coin = document.getElementById("coin");
const cfButton = document.getElementById("coinflipButton");
const cfResult = document.getElementById("coinflipResult");
const coinImg = document.querySelector(".displayCoin");

// function flip() {
//     const coinflip = Math.floor(Math.random() * 2) + 1;
//     coin.src = `../src/cf${coinflip}.png`;
//     console.log(coinflip);
// }

// cfButton.addEventListener("click", flip);

function flipTwo() {
    const coinflip = Math.floor(Math.random() * 2) + 1;
    if(coinflip === 1) {
        coinImg.innerHTML = `
        <img id="coinflipped" src="../src/cf${coinflip}.png">
        `;
        cfResult.innerHTML = `
        <p id="coinflipResult">The coin has landed on Heads!</p>
        `;
    } else {
        coinImg.innerHTML = `
        <img id="coinflipped" src="../src/cf${coinflip}.png">
        `;
        cfResult.innerHTML = `
        <p id="coinflipResult">The coin has landed on Tails!</p>
        `;
    }
};

cfButton.addEventListener("click", flipTwo);