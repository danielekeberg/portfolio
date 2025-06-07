import { API_URL, header, moreWines } from './config.js';

async function fetchMore(id) {
    try {
        const res = await fetch(`${API_URL}?productId=${id}`, header)
        const data = await res.json();
        const d = document.createElement('a');
        d.title = data[0].basic.productShortName;
        d.className = 'product';
        d.href = `../wine/?q=${data[0].basic.productId}&_n=${data[0].basic.productShortName}`;
        d.innerHTML = 
        `
        <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${data[0].basic.productId}-1.jpg">
        <h1>${data[0].basic.productShortName}</h1>
        `;
        document.getElementById('moreProducts').appendChild(d);
    } catch(error) {
        console.error(error);
    }
}

function getWines() {
    for(let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * moreWines.length);
        fetchMore(moreWines[random])
    }
}

getWines();