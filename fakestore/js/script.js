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

            <p>${product.category }</p>
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
            <p>${data.rating.rate} / ${data.rating.count}</p>
            <P>${data.description}</p>
            <p>${data.category}</p>
        </div>
        `;

    } catch(error) {
        console.log(error);
    }
}

fetchSingleProduct();

async function fetchUsers() {
    try {
        const response = await fetch('https://fakestoreapi.com/carts');
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

fetchUsers();