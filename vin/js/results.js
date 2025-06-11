import { API_URL, header, moreWines } from './config.js';

async function fetchWines(id) {
    try {
        const res = await fetch(`${API_URL}?productId=${id}`, header);
        const data = await res.json();
        const d = document.createElement('a');
        d.className = 'featured-wine';
        d.href = `../product/?q=${data[0].basic.productId}&${data[0].basic.productShortName}`;
        d.innerHTML = 
        `
        <div class="wine-img">
            <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${data[0].basic.productId}-1.jpg">
        </div>
        <div class="wine-desc">
            <h3>${data[0].basic.productShortName}</h3>
        </div>
        `;

        document.getElementById('results').appendChild(d);
    } catch(error) {
        console.error(error);
    }
}

function wines() {
    moreWines.forEach(wine => {
        fetchWines(wine);
    })
}

let start = 0;

async function search() {
    const searchInput = document.getElementById('searchInput').value;
    const newParams = new URLSearchParams();
    newParams.set('q', document.getElementById('searchInput').value);

    const newUrl = `${window.location.pathname}?${newParams.toString()}`;
    window.history.pushState({}, '', newUrl);

    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    
    if(searchInput === '') {
        document.getElementById('results').innerHTML = '';
        return wines();
    }
    if(!q) {
        document.getElementById('results').innerHTML = '';
        return wines();
    }
    try {
        const res = await fetch(`${API_URL}?productShortNameContains=${q}&start=${start}&maxResults=20`, header);
        const data = await res.json();
        document.getElementById('results').innerHTML = '';
        data.forEach(result => {
            const d = document.createElement('a');
            d.className = 'featured-wine';
            d.href = `../product/?q=${result.basic.productId}&${result.basic.productShortName}`;
            d.innerHTML = 
            `
            <div class="wine-img">
                <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${result.basic.productId}-1.jpg">
            </div>
            <div class="wine-desc">
                <h3>${result.basic.productShortName}</h3>
            </div>
            `;
            document.getElementById('results').appendChild(d);
        })
    } catch(error) {
        console.error(error);
    }
}   

search();

// document.getElementById('searchInput').addEventListener('keydown', (e) => {
//     if(e.key === 'Enter') {
//         search();
//     }
// });

document.getElementById('searchInput').addEventListener('input', search);
