import { userAPI, msgAPI } from './config.js';

const getUsername = localStorage.getItem('testName');
if(!getUsername) {
    window.location.href = '../../../../message/';
}

async function totalMembers() {
    try {
        const res = await fetch(`${userAPI}`);
        const data = await res.json();
        const length = data.length;
        console.log(length);
        const username = data.find(user => user.username === getUsername);
        console.log(username.avatar);
        document.getElementById('postImg').src = username.avatar;
        document.getElementById('totalMembers').textContent = length;
    } catch(error) {
        console.error(error);
    }
}

totalMembers();

// document.getElementById('goToProfile').addEventListener('click', () => {
//     const usrnm = localStorage.getItem('testName');
//     window.location.href = `../profile/`
// })