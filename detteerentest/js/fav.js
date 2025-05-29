import { apiKey, apiUrl } from './config.js';

async function fetchList(imdbID) {
    document.querySelector('.loader').style.display = 'block';
    try {
        const res = await fetch(`${apiUrl}apiKey=${apiKey}&i=${imdbID}`);
        const data = await res.json();
        const d = document.createElement('a');
        // d.href = `../m/?q=${data.Title}&${data.imdbID}`;
        d.className = 'movieCard';
        d.innerHTML = 
        `
        <img id="moviePoster" src="${data.Poster}" alt="${data.Title}s alt">
        <div class="movieDetails">
            <h2>${data.Title}</h2>
            <p>${data.Year}</p>
            <p>${data.Type}</p>
            <button class="removeList">Remove</button>
        </div>
        `;

        document.getElementById('list').appendChild(d);

        d.querySelector('.removeList').addEventListener('click', () => {
            removeFromList(imdbID);
            d.remove();
            location.reload();
        });
    } catch(error) {
        console.error(error);
    } finally {
        document.querySelector('.loader').style.display = 'none';
    }
}

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        fetchList('tt6751668');
    }
});

function fullList() {
    const list = JSON.parse(localStorage.getItem('list')) || [];
    list.forEach(movie => {
        fetchList(movie)
    })
}

fullList();

export function removeFromList(imdbID) {
    let list = JSON.parse(localStorage.getItem('list')) || [];
    list = list.filter(id => id !== imdbID);
    localStorage.setItem('list', JSON.stringify(list));
    const d = document.createElement('div');
        d.className = 'error';
        d.innerHTML = 
        `
            <p>Removed from list</p>  
        `;
        document.body.appendChild(d);
        setTimeout(() => {
            document.querySelector('.error').remove();
        },2000);
    // location.reload();
}