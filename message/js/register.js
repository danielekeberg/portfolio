import { userAPI } from "./config.js";

async function register() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    const id = await getTotal();

    try {
        const res = await fetch(`${userAPI}/search?username=${username}`);
        const data = await res.json();
        if(data.length > 0) {
            console.warn('Username already exists.');
            return;
        }
        const postRes = await fetch(userAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    username: username,
                    password: password,
                    id: id,
                    avatar: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'
                }
            })
        });
        window.location.href = '../login/';
    } catch(error) {
        console.error(error);
    }
}

async function getTotal() {
    try {
        const res = await fetch(userAPI);
        const data = await res.json();
        return data.length + 1;
    } catch(error) {
        console.error(error);
    }
}

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        register();
    }
})
document.body.addEventListener('keydown', (e) => {
    if(e.key === 'S') {
        test();
    }
})

async function test() {
    try {
        const res = await fetch(`${userAPI}/search?username=daniel`);
        const data = await res.json();
        console.log(data);
    } catch(error) {
        console.error(error);
    }
}
