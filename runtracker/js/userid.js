const uid = localStorage.getItem('userid');

if(!uid) {
    const d = document.createElement('div');
    d.className = 'overlay';
    d.innerHTML = 
    `
    <div class="addRun">
        <h3 style="text-align: center;">You need a User ID to continue!</h3>
        <div class="userid-forms">
            <input type="text" placeholder="123456" id="uidInput">
            <button id="generateUid">Generate New UID</button>
        </div>
    </div>
    `;

    setTimeout(() => {
        document.getElementById('uidInput').addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                localStorage.setItem('userid', document.getElementById('uidInput').value);
                document.querySelector('.overlay').remove();
                console.log('value set');
            }
        })
    });

    setTimeout(() => {
        document.getElementById('generateUid').addEventListener('click', () => {
            const random = Math.floor(Math.random() * 999999);
            const newuid = String(random).padStart(6, '0');
            const finisheduid = Number(newuid);
            localStorage.setItem('userid', finisheduid);
            document.querySelector('.overlay').remove();
        })
    })

    document.body.appendChild(d);
}