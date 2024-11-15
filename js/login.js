const loginBtn = document.getElementById("loginBtn");

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "admin";
    const correctPassword = "admin";

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("success-message").style.display = "block";
        setTimeout(() => {
            window.location.href = "/test";
        }, 500)
    } else {
        document.getElementById("error-message").style.display = "block";
        setTimeout(() => {
            document.getElementById("error-message").style.display = "none";
        }, 3000);
    }
}

loginBtn.addEventListener("click", login);