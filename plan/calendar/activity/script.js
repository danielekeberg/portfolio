const params = new URLSearchParams(window.location.search);
const currentPage = params.get('day');

if (currentPage) {
    document.getElementById('fungerte').innerHTML = `<h2>Dette er dag ${currentPage}.</h2>`
}