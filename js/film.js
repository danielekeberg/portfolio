fetch('../API/films.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const filmContainer = document.getElementById('film-container');

    data.forEach(film => {
      const filmHTML = `
        <div class="film">
          <h1>${film.title} (${film.year})</h1>
          <p><strong>Genre:</strong> ${film.genre.join(', ')}</p>
          <p><strong>Director:</strong> ${film.director.join(', ')}</p>
          <p><strong>Description:</strong><br> ${film.description}</p>
          <a href="${film.IMDB}" target="_blank">IMDB Page</a>
          <img src="${film.image}" alt="${film.title}" />
        </div>
      `;

      filmContainer.innerHTML += filmHTML;
    });
  })
  .catch(error => console.error('Error fetching the API:', error));