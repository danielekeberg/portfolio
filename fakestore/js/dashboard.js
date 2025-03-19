const params = new  URLSearchParams(window.location.search);
const selectedDashboard = params.get('get');

async function loadUsers() {
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

async function loadCarts() {
    try {
        const response = await fetch('https://fakestoreapi.com/carts');
        const data = await response.json();
        console.log(data);
        data.forEach(cart => {
            const d = document.createElement('a');
            d.className = 'displayUser';
            d.href = `./order/?order=${cart.id}`;
            d.innerHTML = `
            <div class="userCard">
                <p>${cart.id}</p>
            </div>`;
            document.getElementById('display').appendChild(d);
        })
    } catch(error) {
        console.lor(error);
    }
}

if(selectedDashboard === 'carts') {
    loadCarts();
} else {
    loadUsers();
}

console.log(selectedDashboard)