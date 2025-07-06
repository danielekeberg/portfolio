import { msgAPI, userAPI } from "./config.js";

const qwe = localStorage.getItem('testName');

async function loadMsg() {
    try {
        const res = await fetch(msgAPI);
        const data = await res.json();
        data.sort((a, b) => b.time - a.time);
        for(const msg of data) {
            const d = document.createElement('div');
            d.className = 'msg';

            const timestamp = Number(msg.time);
            const timeText = timeAgo(timestamp);

            d.innerHTML = 
            `
            <div class="card post">
                <img src="${msg.avatar}">
                <div class="post-details">
                    <div class="who">
                        <div>
                            <h4>${msg.display}</h4>
                            <p>${timeText}</p>
                        </div>
                        <button class="isOwner" style="display: none">
                            <img src="../assets/delete.svg">
                        </button>
                    </div>
                    <p>${msg.msg}</p>
                </div>
            </div>
            `;
            document.getElementById('display').appendChild(d);
            
            if (msg.username === qwe) {
                d.querySelector('.isOwner').style.display = 'block'; 
            }
            d.querySelector('.isOwner').addEventListener('click', () => {
                deletePost(`${msg.id}`)
                d.remove();
            });
        }
    } catch(error) {
        console.error(error);
    }
}

async function deletePost(id) {
    try {
        const res = await fetch(`${msgAPI}/id/${id}`, {
            method: 'DELETE'
        });
    } catch(error) {
        console.error(error);
    }
}

function timeAgo(timestamp) {
    const seconds = Math.floor(Date.now() - timestamp) / 1000;

    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if(count >= 1) {
            return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }

    return 'just now';
}

loadMsg();

async function sendMsg() {
    const id = await getId();
    const username = localStorage.getItem('testName');
    const msg = document.getElementById('messageInput').value;
    const time = new Date();
    const timeNow = time.getTime();
    const getUsername = await getDisplayName(username);
    const getAvatar = await getAvatarURL(username);
    try {
        const res = await fetch(msgAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                username: username,
                display: getUsername,
                msg: msg,
                time: timeNow,
                avatar: getAvatar
            })
        })
        document.getElementById('messageInput').value = '';
    } catch(error) {
        console.error(error);
    } finally {
        getLastMsg();
    }
}

async function getDisplayName(username) {
    try {
        const res = await fetch(`${userAPI}`);
        const data = await res.json();
        const getUsername = data.find(user => user.username === username);
        return getUsername.display;
    } catch(error) {
        console.error(error);
    }
}

async function getAvatarURL(username) {
    try {
        const res = await fetch(`${userAPI}`);
        const data = await res.json();
        const getUsername = data.find(user => user.username === username);
        return getUsername.avatar;
    } catch(error) {
        console.error(error);
    }
}

async function getLastMsg() {
    try {
        let last;
        const res = await fetch(msgAPI);
        const data = await res.json();
        last = data.length - 1;
        const lastMsg = data[last];

        const d = document.createElement('div');
        d.className = 'msg';
        d.innerHTML = 
        `
        <div class="card post">
            <img src="${lastMsg.avatar}">
            <div class="post-details">
                <div class="who">
                    <div>
                        <h4>${lastMsg.display}</h4>
                        <p>just now</p>
                    </div>
                </div>
                <p>${lastMsg.msg}</p>
            </div>
        </div>
        `;
        document.getElementById('newMsg').appendChild(d);
    } catch(error) {
        console.error(error);
    }
}

document.getElementById('sendMsg').addEventListener('click', sendMsg);

async function getId() {
    try {
        const res = await fetch(msgAPI);
        const data = await res.json();
        return data.length + 1;
    } catch(error) {
        console.error(error);
    }
}