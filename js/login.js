const loginBtn = document.getElementById("loginBtn");

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "admin";
    const correctPassword = "adminlogin";

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("success-message").style.display = "block";
        setTimeout(() => {
            window.location.href = "/test";
        }, 1000)
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

loginBtn.addEventListener("click", login);