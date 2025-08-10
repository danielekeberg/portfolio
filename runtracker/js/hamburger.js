const uid = localStorage.getItem('userid');

function hamburger() {
    const d = document.createElement('div');
    d.className = 'dropdown';
    d.innerHTML = `
    <div class="menu">
        <p>${uid ? uid : 'refresh the page'}</p>
    </div>
    <div class="menu">
        <p id="changeUsername">Change username</p>
    </div>
    `;
    if(document.querySelector('.dropdown')) {
        document.querySelector('.dropdown').remove();
        return;
    }
    document.getElementById('hamburger').appendChild(d);
    document.getElementById('changeUsername').addEventListener('click', () => {
        const d = document.createElement('div');
        d.className = 'overlay';
        d.innerHTML =
        `
        <div class="addRun">
            <h3>Change username</h3>
            <div class="userid-forms">
                <input type="text" placeholder="New username" id="newUsernameInput">
                <button id="newUsernameBtn">Change username</button>
            </div>
        </div>
        `;
        document.body.appendChild(d);
        document.getElementById('newUsernameBtn').addEventListener('click', () => {
            localStorage.setItem('userid', document.getElementById('newUsernameInput').value);
            window.location.reload();
        });
        document.getElementById('newUsernameInput').addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                localStorage.setItem('userid', document.getElementById('newUsernameInput').value);
                window.location.reload();
            }
        })
    })
}

document.getElementById('hamburger').addEventListener('click', hamburger);