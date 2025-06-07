import { header, API_URL } from "./config.js";
const params = new URLSearchParams(window.location.search);
const q = params.get('q');

async function fetchProduct() {
    try {
        const res = await fetch(`${API_URL}?productId=${q}`, header);
        const data = await res.json();
        document.title = `${data[0].basic.productShortName}`;
        document.getElementById('product').innerHTML = 
        `
        <div class="display-product">
            <div class="display-image">
                <img src="https://bilder.vinmonopolet.no/cache/300x300-0/${data[0].basic.productId}-1.jpg">
            </div>
            <div class="display-info">
                <div class="display-header">
                    <p id="type">RØDVIN</p>
                    <img class="favIcon" src="../assets/star-svgrepo-com.svg">
                </div>
                <h1>${data[0].basic.productShortName}</h1>
                <p id="productIdNumber">${data[0].basic.productId}</p>
                <p>APIen har ikke description på produktene, så det blir litt lite her.. :(<br>Dårlig API >:(</p>
            </div>
        </div>
        `;
        document.querySelector('.favIcon').addEventListener('mouseover', () => {
            document.querySelector('.favIcon').src = '../assets/star-svgrepo-com (1).svg'
        });
        document.querySelector('.favIcon').addEventListener('mouseleave', () => {
            document.querySelector('.favIcon').src = '../assets/star-svgrepo-com.svg'
        });

        document.querySelector('.favIcon').title = `Add ${data[0].basic.productShortName} to list`;
        document.getElementById('productIdNumber').title = `productId`;
    } catch(error) {
        console.error(error);
    }
}

fetchProduct();