document.getElementById('movieInput').addEventListener('keydown', (e) => {
const query = document.getElementById('movieInput').value;

    if(e.key === 'Enter') {
        window.location.href = `../../detteerentest/s/?q=${query}`;
    }
})

function displayUsername() {
    document.getElementById('displayedUsername').textContent = localStorage.getItem('name');
}

displayUsername();

const user = localStorage.getItem('name');
if(!user) {
    document.getElementById('nameModal').style.display = 'flex';
}

function setUsername() {
    const username = document.getElementById('nameInput').value;
    localStorage.setItem('name', username);
    console.log(username);
    location.reload();
}
document.getElementById('nameSubmit').addEventListener('click', setUsername);
document.getElementById('nameInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        setUsername();
    }
})

document.getElementById('changeName').addEventListener('click', () => {
    localStorage.removeItem('name');
    location.reload();
});

document.getElementById('emptyList').addEventListener('click', () => {
    localStorage.removeItem('list');
    location.reload();
})