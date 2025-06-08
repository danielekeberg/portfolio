import { API_URL, header, wines } from './config.js';

async function fetchFeatured(id) {
    try {
        const res = await fetch(`${API_URL}?productId=${id}`, header);
        const data = await res.json();
        const d = document.createElement('a');
        d.className = 'featured-wine';
        d.href = `../wine/?q=${data[0].basic.productId}&${data[0].basic.productShortName}`;
        d.innerHTML = 
        `
        <div class="wine-img">
            <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${data[0].basic.productId}-1.jpg">
        </div>
        <div class="wine-desc">
            <h3>${data[0].basic.productShortName}</h3>
        </div>
        `;
        document.getElementById('featured').appendChild(d);
    } catch(error) {
        console.error(error);
    }
}

function featured() {
    wines.forEach(wine => {
        fetchFeatured(wine);
    })
}

featured();