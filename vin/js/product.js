import { API_URL, header } from './config.js';
const params = new URLSearchParams(window.location.search);
const q = params.get('q');

document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const s = document.getElementById('searchInput').value;
        location.href = `../browse/?q=${s}`
    }
})

async function fetchProduct() {
    try {
        const res = await fetch(`${API_URL}?productId=${q}`, header);
        const data = await res.json();
        document.getElementById('product').innerHTML =
        `
        <div class="product-img">
            <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${data[0].basic.productId}-1.jpg">
        </div>
        <div class="product-desc">
            <h1>${data[0].basic.productShortName}</h1>
            <div class="review">
                <div class="stars">
                    <img src="../../detteerentest/assets/star.svg">
                    <img src="../../detteerentest/assets/star.svg">
                    <img src="../../detteerentest/assets/star.svg">
                    <img src="../../detteerentest/assets/star.svg">
                    <img src="../../detteerentest/assets/star.svg">
                </div>
                <div class="total-revs">
                    <p>4.2</p>
                    <span>(210 reviews)</span>
                </div>
            </div>
            <p>Dette er en falsk beskrivelse av <strong>${data[0].basic.productShortName}</strong>!
            Her er det bare å lese fordi dette er veldig spennende! Wow meget imponerende! :) </p>
        </div>
        `;
    } catch(error) {
        console.error(error);
    }
}

fetchProduct();