import { API_URL, moreWines, header, colors } from "./config.js";

let color = 0;
let max = 75;

async function fetchProduct() {
    try {
        const res = await fetch(`${API_URL}?start=120&maxResults=${max}&productTypeId=red_wine`, header)
        const data = await res.json();
        if(!res.ok) {
            throw new Error(`Error fetching ${res.status}`);
        }
        data.forEach(product => {
            const d = document.createElement('a');
            d.href = `../../vin/wine/?q=${data[0].basic.productId}&_n=${data[0].basic.productShortName}`
            d.className = 'product';
            d.style.backgroundColor = colors[color] + 95;
            color++;
            if(color >= colors.length) {
            color = 0;
            }
            d.innerHTML = 
            `
            <div class="product-img">
                <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${product.basic.productId}-1.jpg">
            </div>
            <div class="product-title">
            <h1>${product.basic.productShortName}</h1>
            <p>${product.basic.productId}</p>
            </div>
            `;
            document.getElementById('products').appendChild(d);
            })
    } catch(error) {
        console.error(error);
    }
}

function handleScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    if(nearBottom) {
        fetchProduct();
    }
}

// window.addEventListener('scroll', handleScroll);

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        fetchProduct();
    }
})

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
    } catch(error) {
        console.error(error)
    }
}

function fetchAllWines() {
    moreWines.forEach(wine => {
        fetchEach(wine)
    })
};

fetchAllWines();