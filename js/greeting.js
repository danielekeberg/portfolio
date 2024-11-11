const nameDisplay = document.getElementById("nameDisplay");
const nameButton = document.getElementById("nameSubmit");
const bannedWords = ["hello", "hade", "bannedword", "test"];

function greeting() {
    const username = document.getElementById("nameInput").value;
    const userColor = document.getElementById("colorInput").value;
    if (bannedWords.includes(username)) {
        nameDisplay.textContent = `That word is not allowed`;
    } else {
        nameDisplay.innerHTML = `<p>Welcome <span style="color: ${userColor}">${username}</span>!</p>`;
    }
    
}

nameButton.addEventListener("click", greeting);