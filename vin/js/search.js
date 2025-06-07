import { API_URL, header, colors } from './config.js';

const params = new URLSearchParams(window.location.search);
const s = params.get('s');

let color = 0;

async function search() {
    try {
        const res = await fetch(`${API_URL}?productShortNameContains=${s}`, header);
        const data = await res.json();
        console.log(data);
        if(data.length === 0) {
            return document.getElementById('products').innerHTML = 
            `
            <h1>Error fetching product. Try again!</h1>
            `;
        }
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
        console.error(error);
    }
}

search();