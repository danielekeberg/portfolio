import { userAPI } from './config.js';

async function login() {
    try {
        const username = document.getElementById('usernameInput').value;
        const password = document.getElementById('passwordInput').value;
        const res = await fetch(userAPI);
        const data = await res.json();
        const findUser = data.find(user => user.username === username);

        if(!res.ok) {
            document.getElementById('signIn').textContent = 'Sign In';
        }

        if(password === findUser.password) {
            localStorage.setItem('testName', findUser.username);
            window.location.href = '../main/';
        } else if(password !== findUser.password) {
            document.getElementById('signIn').textContent = 'Sign In';
        }
    } catch(error) {
        console.error(error);
        document.getElementById('signIn').textContent = 'Sign In';
    }
}

document.getElementById('usernameInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        document.getElementById('signIn').textContent = 'Signing In...';
        login();
    }
})
document.getElementById('passwordInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        document.getElementById('signIn').textContent = 'Signing In...';
        login();
    }
})
document.getElementById('signIn').addEventListener('click', () => {
    document.getElementById('signIn').textContent = 'Signing In...';
    login();
});