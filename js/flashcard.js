const flashCardsData = {
        questionOne: { question: "What is the capital of France?", answer: "Paris" },
        questionTwo: { question: "Who wrote Romeo and Juliet?", answer: "William Shakespeare" },
        questionThree: { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        questionFour: { question: "What is the smallest unit of life?", answer: "The cell" },
        questionFive: { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
        questionSix: { question: "What is the process by which plants make their food?", answer: "Photosynthesis" },
        questionSeven: { question: "How many continents are there on Earth?", answer: "Seven" },
        questionEight: { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
        questionNine: { question: "In which country did the Olympics originate?", answer: "Greece" },
        questionTen: { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
        questionEleven: { question: "What is the largest ocean on Earth?", answer: "The Pacific Ocean" },
        questionTwelve: { question: "What gas do plants absorb from the atmosphere?", answer: "Carbon dioxide" }
    };

function flipCard(cardId) {
    const cardElement = document.getElementById(cardId);
    const cardData = flashCardsData[cardId];

    if (cardElement.textContent === cardData.question) {
        cardElement.textContent = cardData.answer;
        cardElement.classList.add("flipped");
    } else {
        cardElement.textContent = cardData.question;
        cardElement.classList.remove("flipped");
    }
}

Object.keys(flashCardsData).forEach(cardId => {
    const cardElement = document.getElementById(cardId);
    cardElement.addEventListener("click", () => flipCard(cardId));
});