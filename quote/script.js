const quote = document.getElementById('quote');
const author = document.getElementById('author');
const quoteBox = document.getElementById('quote-box');
const quoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
    try {
        const response = await fetch('https://qapi.vercel.app/api/random');
        const data = await response.json();
        quote.textContent = `${data.quote}`;
        author.textContent = `- ${data.author}`;
    } catch (error) {
        quote.textContent = 'Failed to fetch quote' + ' ' + error;
        author.textContent = '';
    }
}

fetchQuote();

quoteBtn.addEventListener('click', fetchQuote);