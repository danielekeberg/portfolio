const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it.",
    "Great things never come from comfort zones."
  ];

let quoteCount = 0;

  function randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomNumber];
    document.getElementById('quoteCounter').innerHTML = `<p>You have generated <span>${quoteCount + 1}</span> random quotes</p>`;
    quoteCount++;
  }

  document.getElementById('quoteBtn').addEventListener('click', randomQuote);