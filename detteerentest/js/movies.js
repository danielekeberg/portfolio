import { apiKey, apiUrl } from './config.js';
import { removeFromList } from './fav.js';

const param = new URLSearchParams(window.location.search);
const q = param.get('q')
const i = param.get('i')
console.log(q);

async function fetchMovies() {
    document.querySelector('.loader').style.display = 'block';
    try {
        const response = await fetch(`${apiUrl}apikey=${apiKey}&t=${q}&plot=full`);
        const data = await response.json();
        console.log(data);
        document.title = `iMDb - ${data.Title}`;
        document.getElementById('main').innerHTML =
        `
        <img src="${data.Poster}" alt="${data.Title}s alt">
        <div>
            <div class="movieHeader">
                <div class="movieTitle">
                    <h1>${data.Title}</h1>
                    <p>(${data.Year})</p>
                </div>
                <img style="display: none;" id="fav" src="../assets/star2.svg">
                <img style="display: none;" id="removeFav" src="../assets/star.svg">
            </div>
            <div class="rated">
                <p id="rated">${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
            </div>
            <div class="rating">
                <img src="../assets/star.svg" alt="Rating Star">
                <p id="rating">${data.imdbRating} / 10</p>
                <p>${data.imdbVotes}</p>
            </div>
            <div class="desc">
                <p>${data.Plot}</p>
            </div>
            <div class="cast">
                <div>
                    <p>Director</p>
                    <p>Writers</p>
                    <p>Stars</p>
                </div>
                <div>
                    <p>${data.Director}</p>
                    <p>${data.Writer}</p>
                    <p>${data.Actors}</p>
                </div>
            </div>
        </div>
        `;

        let watchList = JSON.parse(localStorage.getItem('list')) || [];
        if(watchList.includes(data.imdbID)) {
            document.getElementById('fav').style.display = 'none';
            document.getElementById('removeFav').style.display = 'block';
        } else {
            document.getElementById('fav').style.display = 'block';
            document.getElementById('removeFav').style.display = 'none';
        }

        document.getElementById('fav').addEventListener('click', () => {
            addToList(i);
            checkIfListed(i);
            // location.reload();
        });
        document.getElementById('removeFav').addEventListener('click', () => {
            removeFromList(i);
            checkIfListed(i);
            // location.reload();
        });
    } catch(error) {
        console.error(error);
    } finally {
        document.querySelector('.loader').style.display = 'none';
    }
}

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        fetchMovies();
        // test();
    }
})

fetchMovies();

function addToList(imdbID) {
    let watchList = JSON.parse(localStorage.getItem('list')) || [];

    if(!watchList.includes(imdbID)) {
        watchList.push(imdbID);
        localStorage.setItem('list', JSON.stringify(watchList));
        console.log(localStorage.getItem('list'));

        const d = document.createElement('div');
        d.className = 'success';
        d.innerHTML = 
        `
            <p>Added to list</p>  
        `;
        document.body.appendChild(d);
        setTimeout(() => {
            document.querySelector('.success').remove();
        },2000);
    } else {
        const d = document.createElement('div');
        d.className = 'error';
        d.innerHTML = 
        `
            <p>Already in list</p>  
        `;
        document.body.appendChild(d);
        setTimeout(() => {
            document.querySelector('.error').remove();
        },2000);
    }
};

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'l') {
        addToList(i);
    }
});

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'k') {
        localStorage.clear('list');
        console.log('localStorage cleared')
    }
})

function checkIfListed(imdbID) {
    let watchList = JSON.parse(localStorage.getItem('list')) || [];
        if(watchList.includes(imdbID)) {
            document.getElementById('fav').style.display = 'none';
            document.getElementById('removeFav').style.display = 'block';
        } else {
            document.getElementById('fav').style.display = 'block';
            document.getElementById('removeFav').style.display = 'none';
        }
}