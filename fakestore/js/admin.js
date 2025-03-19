async function test() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const totalPrice = data.reduce((acc, product) => acc + product.price, 0).toFixed(2);
        console.log('Total price: ' + totalPrice);
    } catch(error) {
        console.log(error);
    }
}

test();

async function getUsers() {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        document.getElementById('users').textContent = `Total users: ${data.length}`
    } catch(error) {
        console.log(error);
    }

    try {
        const response = await fetch('https://fakestoreapi.com/carts');
        const data = await response.json();
        document.getElementById('carts').textContent = `Total carts: ${data.length}`;
    } catch(error) {
        console.log(error);
    }
}

getUsers();

document.getElementById('users').addEventListener('click', () => {
    window.location.href = './users/?get=users';
});
document.getElementById('carts').addEventListener('click', () => {
    window.location.href = './users/?get=carts';
});

const params = new URLSearchParams(window.location.search);
const selectedId = params.get('get');