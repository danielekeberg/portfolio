async function fetchUser() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/hikaru`);
        const data = await res.json();
        console.log(data);

        document.getElementById('username').textContent = data.username;
        fetchCountry(data.country);
        if(data.avatar) {
            document.getElementById('avatar').src = data.avatar;
        } else {
            document.getElementById('avatar').src = 'https://i.pinimg.com/736x/45/8c/46/458c46c5a4d5565826a5720365a1a332.jpg';
        }
        
    } catch(error) {
        console.error(error);
    }
}

async function fetchCountry(api) {
    try {
        const res = await fetch(api);
        const data = await res.json();
        console.log(data);
        document.getElementById('location').textContent = data.name;
    } catch(error) {
        console.error(error);
    }
}

async function fetchUserStats() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/hikaru/stats`);
        const data = await res.json();
        console.log(data);
        document.getElementById('rapidRating').textContent = data.chess_rapid.last.rating;
        document.getElementById('blitzRating').textContent = data.chess_blitz.last.rating;
        document.getElementById('bulletRating').textContent = data.chess_bullet.last.rating;

        document.getElementById('rapidPeak').textContent = `Best: ${data.chess_rapid.best.rating}`;
        document.getElementById('blitzPeak').textContent = `Best: ${data.chess_blitz.best.rating}`;
        document.getElementById('bulletPeak').textContent = `Best: ${data.chess_bullet.best.rating}`;
        document.getElementById('rapidGames').textContent = (data.chess_rapid.record.win + data.chess_rapid.record.draw + data.chess_rapid.record.loss) + ' games';

        
    } catch(error) {
        console.error(error);
    }
}

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        fetchUser();
        fetchUserStats();
    }
})