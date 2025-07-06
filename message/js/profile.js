import { userAPI } from './config.js';

const localUsername = localStorage.getItem('testName');

async function fetchProfile() {
    try {
        const res = await fetch(userAPI);
        const data = await res.json();

        const findUsername = data.find(user => user.username === localUsername);

        if(!res.ok) {
            console.error('errorr');
        }

        document.getElementById('avatar').src = findUsername.avatar ? findUsername.avatar : 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg';
        document.getElementById('avatarInput').placeholder = findUsername.avatar ? findUsername.avatar : 'Default Image';
        document.getElementById('avatarInput').value = findUsername.avatar ? findUsername.avatar : '';

        document.getElementById('displayName').textContent = findUsername.display;
        document.getElementById('displayNameInput').placeholder = findUsername.display ? findUsername.display : 'Nameless chicken...';
        document.getElementById('displayNameInput').value = findUsername.display ? findUsername.display : '';

        document.getElementById('username').textContent = findUsername.username;

        document.getElementById('bio').textContent = findUsername.bio ? findUsername.bio : 'No bio.. :(';
        document.getElementById('bioInput').placeholder = findUsername.bio ? findUsername.bio : 'No bio..';
        document.getElementById('bioInput').value = findUsername.bio ? findUsername.bio : '';
    } catch(error) {
        console.error(error);
    }
}

fetchProfile();

const button = document.getElementById('edit');

button.addEventListener('click', async () => {
    const mode = button.getAttribute('data-mode');
    const inputs = [
        document.getElementById('displayNameInput'),
        document.getElementById('avatarInput'),
        document.getElementById('bioInput'),
    ];

    if(mode === 'edit') {
        inputs.forEach(input => input.disabled = false);
        button.textContent = 'Save Changes';
        button.setAttribute('data-mode', 'save');
    } else {
        inputs.forEach(input => input.disabled = true);
        const getUsername = localStorage.getItem('testName');
        await changeProfile(getUsername);

        button.textContent = 'Edit Profile';
        button.setAttribute('data-mode', 'edit');
    }
})

async function changeProfile(username) {
    const displayName = document.getElementById('displayNameInput').value;
    const avatar = document.getElementById('avatarInput').value;
    const bio = document.getElementById('bioInput').value;

    if(displayName === '') {
        console.warn('Fields cant be empty!');
        return;
    }
    try {
        const res = await fetch(`${userAPI}/username/${username}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                display: displayName,
                avatar: avatar ? avatar : 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
                bio: bio ? bio : 'No bio...'
            })
        });
    } catch(error) {
        console.error(error);
    } finally {
        fetchProfile();
    }
}

async function isAdmin() {
    try {
        const res = await fetch(userAPI);
        const data = await res.json();
        const findUser = data.find(user => user.username === localUsername);
        console.log(data);
        if(findUser.admin === 'TRUE') {
            const d = document.createElement('div');
            d.className = 'profile';
            d.innerHTML = 
            `
            <div class="aside"></div>
            <div class="card">
                <div class="profile-header">
                    <h4>Admin</h4>
                </div>
                <div id="allUsers"></div>
                <div id="allPosts"></div>
            </div>
            `;
            document.getElementById('container').appendChild(d);
            fetchUsers();
        }
    } catch(error) {
        console.error(error);
    }
}

async function fetchUsers() {
    try {
        const res = await fetch(userAPI);
        const data = await res.json();
        data.forEach(user => {
            const d = document.createElement('div');
            d.className = 'card';
            d.innerHTML = 
            `
            <img src="${user.avatar ? user.avatar : 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'}">
            <p style="color: #f8fafc">${user.display} <span style="color: #7f889b">(${user.username})</span></p>
            `;
            document.getElementById('allUsers').appendChild(d);
        })
    } catch(error) {
        console.error(error);
    }
}

isAdmin();
// fetchUsers();