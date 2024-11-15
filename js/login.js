const loginBtn = document.getElementById("loginBtn");
const pswrd = document.getElementById("password");
const usr = document.getElementById("username");

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "admin";
    const correctPassword = "admin";

    document.getElementById("success-message").style.display = "none";
    document.getElementById("error-message").style.display = "none";

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
pswrd.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        login();
    }
});
usr.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        login();
    }
});
