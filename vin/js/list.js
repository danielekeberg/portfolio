import { API_URL, wines, header, colors } from "./config.js";

async function fetchProduct() {
    try {
        const res = await fetch(`${API_URL}?productId=${productId}`, header)
        const data = await res.json();
        if(!res.ok) {
            throw new Error(`Error fetching ${res.status}`);
        }
        console.log(data);
        const d = document.createElement('div');
        d.className = 'product';
        d.innerHTML = 
        `
        <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${data[0].basic.productId}-1.jpg">
        <h1>${data[0].basic.productShortName}</h1>
        `;
        document.body.appendChild(d);
    } catch(error) {
        console.error(error);
    }
}

document.body.addEventListener('keydown', () => {
    fetchProduct();
})

let color = 0;

async function fetchEach(id) {
    try {
        
        const res = await fetch(`${API_URL}?productId=${id}`, header);
        const data = await res.json();
        
        const d = document.createElement('a');
        d.href = `../../vin/wine/?q=${data[0].basic.productId}&_n=${data[0].basic.productShortName}`;
        d.style.backgroundColor = colors[color] + 95;
        color++;
        if(color >= colors.length) {
            color = 0;
        }
        console.log(color);
        d.innerHTML = 
        `
        <div class="product-img">
            <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${data[0].basic.productId}-1.jpg">
        </div>
        <div class="product-title">
        <h1>${data[0].basic.productShortName}</h1>
        <p>${data[0].basic.productId}</p>
        </div>
        `;
        document.getElementById('products').appendChild(d);
        console.log(data)
    } catch(error) {
        console.error(error)
    }
}

function fetchAllWines() {
    wines.forEach(wine => {
        fetchEach(wine)
    })
};

fetchAllWines();