const players = ['magnuscarlsen', 'hikaru', 'chessbrah'];

async function featuredPlayers(player) {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${player}/stats`);
        const data = await res.json();
        document.getElementById(`${player}Rapid`).textContent = data.chess_rapid ? data.chess_rapid.last.rating : 0;
        document.getElementById(`${player}Blitz`).textContent = data.chess_blitz ? data.chess_blitz.last.rating : 0;
        document.getElementById(`${player}Bullet`).textContent = data.chess_bullet ? data.chess_bullet.last.rating : 0;
    } catch(error) {
        console.error(error);
    }
}

function fetchPlayers() {
    players.forEach(player => {
        featuredPlayers(player);
    })
}

fetchPlayers();