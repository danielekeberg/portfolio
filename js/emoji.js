const emojiButton = document.getElementById("emojiButton");
const emojiImg = document.getElementById("emojiImg");
const emojiP = document.getElementById("emojiP");


function emoji() {
    const randomEmoji = Math.floor(Math.random() * 39) + 1;
    emojiImg.src = `../src/emoji/emoji${randomEmoji}.png`;
    
    // if (randomEmoji === 1) {
    //     emojiImg.src = `../src/emoji${randomEmoji}.png`;
    // }
    // if (randomEmoji === 2) {
    //     emojiImg.src = `../src/emoji${randomEmoji}.png`;
    // }
    // if (randomEmoji === 3) {
    //     emojiImg.src = `../src/emoji${randomEmoji}.png`;
    // }
    // if (randomEmoji === 4) {
    //     emojiImg.src = `../src/emoji${randomEmoji}.png`;
    // }
    // if (randomEmoji === 5) {
    //     emojiImg.src = `../src/emoji${randomEmoji}.png`;
    // }
    // if (randomEmoji === 6) {
    //     emojiImg.src = `../src/emoji${randomEmoji}.png`;
    // }
}

function emojiTester() {
    const bildeUsynlig = emojiImg.style.display = "none";
}

emojiButton.addEventListener("click", emoji);
