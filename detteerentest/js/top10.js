import { apiKey, apiUrl } from './config.js';

const titles = [
    'The Shawshank Redemption',
    'The godfather',
    'inception',
    'parasite',
    'pulp fiction',
    'breaking bad',
    'game of thrones',
    'stranger things',
    'the sopranos',
    'chernobyl'
];

function watfak() {
    titles.forEach(title => {
        fetchMovie(title);
    })
}


async function fetchMovie(title) {
    document.querySelector('.loader').style.display = 'block';
    try {
        const response = await fetch(`${apiUrl}apiKey=${apiKey}&t=${title}`);
        const data = await response.json();
        const d = document.createElement('a');
        d.href = `./m/?q=${data.Title}&i=${data.imdbID}`;
        d.className = 'card';
        d.innerHTML = `
        <h2>${data.Title}</h2>
        <p id="year">(${data.Year})</p>
        <div class="details">
            <p id="rated">${data.Rated}</p>
            <p>${data.Runtime}</p>
            <p>${data.Genre}</p>
        </div>
        <div class="rating">
            <img src="./assets/star.svg" alt="Rating Star">
            <p id="rating">${data.imdbRating}</p>
            <p>${data.imdbVotes}</p>
        </div>
        <div id="plot">
            <p id="plot">${data.Plot}</p>
        </div>
        <img src="${data.Poster}" alt="${data.Title}">
        `;
        document.getElementById('top10').appendChild(d);
    } catch(error) {
        console.error(error);
    } finally {
        document.querySelector('.loader').style.display = 'none';
    }
}

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        watfak();
    }
})

watfak();