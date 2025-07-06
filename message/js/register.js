import { userAPI } from "./config.js";

async function register() {
    try {
        const username = document.getElementById('usernameInput').value;
        const display = document.getElementById('displayNameInput').value;
        const password = document.getElementById('passwordInput').value;

        const res = await fetch(`${userAPI}`);
        const data = await res.json();

        const findUser = data.find(user => user.username === username);
        if(findUser) {
            console.log('Username already exists');
            return;
        }

        const allUsers = await totalUsers();

        const response = await fetch(userAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: allUsers,
                username: username,
                display: display,
                password: password
            })
        })

        if(response.ok) {
            window.location.href = '../login/';
        } else {
            console.log('error');
        }
    } catch(error) {
        console.error(error);
    }
}

async function totalUsers() {
    try {
        const res = await fetch(userAPI);
        const data = await res.json();
        return data.length - 1;
    } catch(error) {
        console.error(error);
    }
}

document.getElementById('signUp').addEventListener('click', register);
document.getElementById('passwordInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        register();
    }
})
document.getElementById('displayNameInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        register();
    }
})
document.getElementById('usernameInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        register();
    }
})