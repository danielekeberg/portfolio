function rateMovie(imdbID) {
    let rate = JSON.parse(localStorage.getItem('userRating')) || {};

    rate.imdbID = {
        id: 23897,
        rated: 4
    }

    localStorage.setItem('rate', JSON.stringify(rate));

    console.log(JSON.parse(localStorage.getItem('rate')));
}

rateMovie(32838)