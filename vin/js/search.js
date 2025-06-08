import { API_URL, header, colors } from './config.js';

const params = new URLSearchParams(window.location.search);
const s = params.get('s');

let color = 0;
let max = 20;
let start = 0;

async function search() {
    try {
        const res = await fetch(`${API_URL}?productShortNameContains=${s}&start=${start}&maxResults=${max}`, header);
        const data = await res.json();
        if(data.length === 0) {
            return document.getElementById('products').innerHTML = 
            `
            <h1>Error fetching product. Try again!</h1>
            `;
        }
        data.forEach(results => {
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
                <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${results.basic.productId}-1.jpg">
            </div>
            <div class="product-title">
            <h1>${results.basic.productShortName}</h1>
            <p>${results.basic.productId}</p>
            </div>
            `;
            document.getElementById('products').appendChild(d);
        })
        console.log(data)
    } catch(error) {
        console.error(error);
    }
}

function handleScroll() {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        start = start + 20;
        search();
    }
}

window.addEventListener('scroll', handleScroll);

search();