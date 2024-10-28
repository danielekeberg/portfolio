const QOTD = document.getElementById("displayQuote");
const quoteButton = document.getElementById("quoteButton");

let quotes = [
    "Do not wait for tomorrow. Start today.",
    "Simplicity is the ultimate sophistication.",
    "Believe you can, and you're halfway there.",
    "The only way out is through.",
    "Act as if what you do makes a difference. It does.",
    "Dream big and dare to fail.",
    "To live is the rarest thing in the world.",
    "Change the world by being yourself.",
    "Stay hungry, stay foolish.",
    "The journey of a thousand miles begins with one step.",
    "Happiness is not by chance, but by choice.",
    "Do what you can, with what you have, where you are.",
    "Life is what happens when you're busy making other plans.",
    "Strive not to be a success, but rather to be of value.",
    "Don’t watch the clock; do what it does. Keep going.",
    "It always seems impossible until it’s done.",
    "If you’re going through hell, keep going.",
    "In the end, we only regret the chances we didn’t take.",
    "The best way to predict the future is to create it."
];

function quote() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    QOTD.innerText = quotes[randomQuote];
}

quoteButton.addEventListener("click", quote);
