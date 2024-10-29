const nameDisplay = document.getElementById("nameDisplay");
const nameButton = document.getElementById("nameSubmit");

function greeting() {
    const username = document.getElementById("nameInput").value;
    const userColor = document.getElementById("colorInput").value;
    nameDisplay.innerHTML = `<p>Welcome <span style="color: ${userColor}">${username}</span>!</p>`;
}

nameButton.addEventListener("click", greeting);