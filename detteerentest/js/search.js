import { apiKey, apiUrl } from './config.js';

const param = new URLSearchParams(window.location.search);
const s = param.get('q');

let currentPage = 1;
let isLoading = false;
let totalResults = Infinity;
let displayedResults = 0;

async function fetchSearch() {
    document.querySelector('.loader').style.display = 'block';
    try {
        if(isLoading || currentPage > 10) return;

        isLoading = true;

        const response = await fetch(`${apiUrl}apiKey=${apiKey}&s=${s}&page=${currentPage}`)
        const data = await response.json();
        const query = data.Search;
        if(data.Response = 'True') {
            query.forEach(movie => {
                const d = document.createElement('a');
                d.href = `../m/?q=${movie.Title}&i=${movie.imdbID}`;
                d.className = 'movieCard';
                d.innerHTML = 
                `
                <img id="moviePoster" src="${movie.Poster}">
                <div class="movieDetails">
                    <h2>${movie.Title}</h2>
                    <p>${movie.Year}</p>
                    <p>${movie.Type}</p>
                </div>
                `;
                document.getElementById('search').appendChild(d);
                displayedResults++;
            })
            currentPage++;
            console.warn(`Displaying ${displayedResults} / ${totalResults} movies`)
            totalResults = parseInt(data.totalResults, 10);
        }
        isLoading = false;
        
    } catch(error) {
        console.error(error);
    } finally {
        document.querySelector('.loader').style.display = 'none';
    }
}

function handleScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    const moreResultsAvailable = (currentPage - 1) * 10 < totalResults;

    if(nearBottom && moreResultsAvailable) {
        fetchSearch();
    }
}

fetchSearch();

window.addEventListener('scroll', handleScroll);

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        fetchSearch();
    }
});