async function loadDashboard() {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        data.forEach(user => {
            const d = document.createElement('a');
            d.className = 'displayUser';
            d.href = `./user/?user=${user.id}`;
            d.innerHTML = `
            <div class="userCard">
                <p>${user.username}</p>
            </div>`;
            document.getElementById('display').appendChild(d);
        })
    } catch(error) {
        console.log(error);
    }
}

loadDashboard();