async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        
        data.forEach(product => {
            const d = document.createElement('a');
            d.className = 'product';
            d.href = `./product/?${product.title}&id=${product.id}`;
            d.innerHTML = `
            <div class="product-image" id="test">
                <img src="${product.image}">
            </div>
            <p>${product.title}</p>
            <div class="price">
                <p>$${product.price}</p>
            </div>
            `;
            d.title = product.title;
            document.getElementById('items').appendChild(d);
        });
        
    } catch(error) {
        console.log('errooor');
    }
}

fetchProducts();

const params = new URLSearchParams(window.location.search);
const selectedId = params.get('id');

async function fetchSingleProduct() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${selectedId}`);
        const data = await response.json();
        document.getElementById('product').innerHTML = `
        <div class="singleProduct-image">
            <img src="${data.image}">
        </div>
        <div class="">
            <h1>${data.title}</h1>
            <p>$${data.price}</p>
            <p id="ratings">${data.rating.rate} / 5</p>
            <p>${data.description}</p>
            <div class="btn">
                <button class="addCart">Add to cart</button>
            </div>
        </div>
        `;
        document.getElementById('ratings').title = `${data.rating.count} ratings`;

    } catch(error) {
        console.log(error);
    }
}

fetchSingleProduct();

async function fetchUsers() {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

fetchUsers();

function openCart() {
    const d = document.createElement('div');
    d.className = 'cart';
    d.innerHTML = `
    <p>Your items:</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>`

    document.getElementById('openCart').appendChild(d);
}

async function fetchCart() {
    try {
        const response = await fetch('https://fakestoreapi.com/carts/2');
        const data = await response.json();
        console.log(data);
        const cart = data.products;
        console.log(cart);

        cart.forEach(product => {
            const d = document.createElement('div');
            d.className = 'cart-item'
            d.innerHTML = `
            <p>ID: ${product.productId}</p>
            <p>x${product.quantity}</p>`;
            document.getElementById('shoppingCart').appendChild(d);
        })
    } catch(error) {
        console.log(error);
    }
}

fetchCart();