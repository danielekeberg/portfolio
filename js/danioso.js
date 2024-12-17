const usernameInput = document.getElementById("usernameInput");


usernameInput.addEventListener("keypress", (event) => {
    const usernameInputValue = document.getElementById("usernameInput").value.trim();
    if (event.key === "Enter") {
        
        if(usernameInputValue) {
            const filePath = `/dashboard/${usernameInputValue}.html`;
            window.location.href = filePath;
        }
    }
});