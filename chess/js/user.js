const params = new URLSearchParams(window.location.search);
const q = params.get('q');
const page = params.get('v');

async function fetchUser() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}`);
        const data = await res.json();

        document.getElementById('username').textContent = data.username;
        fetchCountry(data.country);

        const joined = data.joined;
        const create = new Date(joined * 1000)
        const yyyy = create.getUTCFullYear();
        document.getElementById('joined').textContent = `Joined in ${yyyy}`
        document.getElementById('followers').textContent = `${data.followers} followers`;

        document.getElementById('chessLink').href = `https://www.chess.com/member/${data.username}`;
        document.getElementById('avatar').src = data.avatar ? data.avatar : 'https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif';

        timeAgo(data.last_online);

        document.title = `ChessKnight - ${data.username}'s stats`;

        if(!data.title) {
            document.getElementById('title').remove();
        } else {
            document.getElementById('title').textContent = data.title;
        }
        
    } catch(error) {
        console.error(error);
    } finally {
        loader();
    }
}

async function fetchCountry(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById('location').textContent = data.name;
    } catch(error) {
        console.error(error);
    }
}

async function totalGames() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}/stats`);
        const data = await res.json();
        const allBlitz = data.chess_blitz ? data.chess_blitz.record.win + data.chess_blitz.record.draw + data.chess_blitz.record.loss : 0;
        const allRapid = data.chess_rapid ? data.chess_rapid.record.win + data.chess_rapid.record.draw + data.chess_rapid.record.loss : 0;
        const allBullet = data.chess_bullet ? data.chess_bullet.record.win + data.chess_bullet.record.draw + data.chess_bullet.record.loss : 0;
        const newAllGames = allBlitz + allRapid + allBullet;

        const rapidWins = data.chess_rapid ? data.chess_rapid.record.win : 0;
        const blitzWins = data.chess_blitz ? data.chess_blitz.record.win : 0;
        const bulletWins = data.chess_bullet ? data.chess_bullet.record.win : 0;
        const allWins = rapidWins + blitzWins + bulletWins;

        const rapidDraws = data.chess_rapid ? data.chess_rapid.record.draw : 0;
        const blitzDraws = data.chess_blitz ? data.chess_blitz.record.draw : 0;
        const bulletDraws = data.chess_bullet ? data.chess_bullet.record.draw : 0;
        const allDraws = rapidDraws + blitzDraws + bulletDraws;

        const rapidLoss = data.chess_rapid ? data.chess_rapid.record.loss : 0;
        const blitzLoss = data.chess_blitz ? data.chess_blitz.record.loss : 0;
        const bulletLoss = data.chess_bullet ? data.chess_bullet.record.loss : 0;
        const allLoss = rapidLoss + blitzLoss + bulletLoss;

        

        document.getElementById('total').textContent = newAllGames;
        document.getElementById('wins').textContent = allWins;
        document.getElementById('draws').textContent = allDraws;
        document.getElementById('loss').textContent = allLoss;

        const winrate = ((allWins / newAllGames) * 100);
        document.getElementById('winrate').textContent = winrate.toFixed(2) + '%';
    } catch(error) {
        console.error(error);
    }
}

async function fetchUserStats() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}/stats`);
        const data = await res.json();
        document.getElementById('rapidRating').textContent = data.chess_rapid ? data.chess_rapid.last.rating : 0;
        document.getElementById('blitzRating').textContent = data.chess_blitz ? data.chess_blitz.last.rating : 0;
        document.getElementById('bulletRating').textContent = data.chess_bullet ? data.chess_bullet.last.rating : 0;

        document.getElementById('rapidPeak').textContent = `Best: ${data.chess_rapid ? data.chess_rapid.last.rating : 0}`;
        document.getElementById('blitzPeak').textContent = `Best: ${data.chess_blitz ? data.chess_blitz.best.rating : 0}`;
        document.getElementById('bulletPeak').textContent = `Best: ${data.chess_bullet ? data.chess_bullet.best.rating : 0}`;
        document.getElementById('rapidGames').textContent = `${data.chess_rapid ? data.chess_rapid.record.win + data.chess_rapid.record.draw + data.chess_rapid.record.loss : 0} games`;
        document.getElementById('blitzGames').textContent = `${data.chess_blitz ? data.chess_blitz.record.win + data.chess_blitz.record.draw + data.chess_blitz.record.loss : 0} games`;
        document.getElementById('bulletGames').textContent = `${data.chess_bullet ? data.chess_bullet.record.win + data.chess_bullet.record.draw + data.chess_bullet.record.loss : 0} games`;
    } catch(error) {
        console.error(error);
    }
}

function timeAgo(timestamp) {
    const seconds = Math.floor(Date.now() / 1000) - timestamp;

    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if(count >= 1) {
            return document.getElementById('lastOnline').textContent = `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }

    return document.getElementById('lastOnline').textContent = 'just now';
}

function newTitle(raw) {
    let nameParts = raw.split('-');
    nameParts = nameParts.slice(0, -1);
    const clean = nameParts.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return clean;
}

let tourney = 0;
async function fetchTournaments() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}/tournaments`);
        const data = await res.json();
        const tournaments = data.finished;
        tourney = data.finished.length;
        for(let i = 0; i < 10; i++) {
            const tournament = tournaments[tourney - 1];
            const id = tournament['@id'];
            
            const d = document.createElement('a');
            const rawTitle = tournaments[tourney - 1].url.replace('https://www.chess.com/tournament/live/', '');
            const cleanTitle = newTitle(rawTitle);
            const tourneyFinished = await fetchTournament(id);
            d.className = 'history-header game';
            d.href = data.finished[tourney - 1].url;
            d.target = '_blank';
            d.innerHTML =
            `
                <p class="longer">${cleanTitle}</p>
                <p>${data.finished[tourney - 1].placement}</p>
                <p>${data.finished[tourney - 1].total_players} players</p>
                <p>${data.finished[tourney - 1].status}</p>
                <p>${tourneyFinished}</p>
            `;
            document.getElementById('tourney').appendChild(d);
            tourney--;
        }
    } catch(error) {
        console.error(error);
    }
}

async function fetchTournament(id) {
    try {
        const res = await fetch(id);
        const data = await res.json();
        const timestamp = data.finish_time;
        const date = new Date(timestamp * 1000);

        const yyyy = date.getUTCFullYear();
        const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
        const dd = String(date.getUTCDate()).padStart(2, '0');

        const full = `${yyyy}-${mm}-${dd}`;
        return full;
    } catch(error) {
        console.error(error);
    }
}

async function fetchHistory() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}/games/archives`);
        const data = await res.json();
        const latestHistory = data.archives.length
        fetch10Games(data.archives[latestHistory - 1])
    } catch(error) {
        console.error(error);
    }
}

function getOpening(raw) {
    let nameParts = raw.split('-');
    nameParts = nameParts.slice(0, -1);
    const clean = nameParts.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return clean;
}

let gameLength = 0;
let openingId = 0;

async function fetch10Games(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        gameLength = Number(data.games.length - 1);
        for(let i = 0; i < 10; i++) {
            const d = document.createElement('div');
            d.className = 'history-header game';
            const timestamp = data.games[gameLength].end_time;
            const date = new Date(timestamp * 1000);
            const yyyy = date.getUTCFullYear();
            const mm = date.getUTCMonth()
            const dd = String(date.getUTCDate()).padStart(2, '0');
            
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des']

            const currentGame = data.games[gameLength];

            let finalOpening;

            const rawOpening = data.games[gameLength].eco.replace('https://www.chess.com/openings/', '');
            const cleanOpening = newTitle(rawOpening);

            const maxChars = 14;
            if(cleanOpening.length > maxChars) {
                finalOpening = cleanOpening.slice(0, maxChars) + '...';
            } else {
                finalOpening = cleanOpening;
            }
            console.log(finalOpening)

            let result;
            let opponent;
            let rating;

            const isWhite = currentGame.white.username.toLowerCase() === q;
            const isBlack = currentGame.black.username.toLowerCase() === q;

            if(isWhite) {
                if(currentGame.white.result !== 'win') {
                    result = 'Loss';
                } else {
                    result = 'Win';
                }
                rating = currentGame.white.rating;
                opponent = currentGame.black.username;
            } else if (isBlack) {
                if(currentGame.black.result !== 'win') {
                    result = 'Loss';
                } else {
                    result = 'Win';
                }
                rating = currentGame.black.rating;
                opponent = currentGame.white.username;
            }

            

            d.innerHTML = 
            `
            <p>${result}</p>
            <p>${opponent}</p>
            <p class="newRating">${rating}</p>
            <p>${currentGame.time_class}</p>
            <p id="opening${openingId}">${finalOpening}</p>
            <p>${currentGame.time_control}</p>
            <p>${months[mm]} ${dd}, ${yyyy}</p>
            `;
            document.getElementById('new-games').appendChild(d);
            document.getElementById(`opening${openingId}`).title = cleanOpening;
            openingId++;
            gameLength--;
        }
    } catch(error) {
        console.error(error);
    }
}

async function fetchClubs() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}/clubs`);
        const data = await res.json();
        const clubs = data.clubs;
        clubs.forEach(club => {
            const timestamp = club.joined;
            const date = new Date(timestamp * 1000);

            const yyyy = date.getUTCFullYear();
            const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
            const dd = String(date.getUTCDate()).padStart(2, '0');
            const d = document.createElement('a');
            d.className = 'club-card';
            d.href = club.url;
            d.target = '_blank';
            d.innerHTML = 
            `
                <div class="club-header">
                    <div>
                        <h4>${club.name}</h4>
                        <p>15 234 members</p>
                    </div>
                    <p class="role">Admin</p>
                </div>
                <div class="club-details">
                    <p>Joined</p>
                    <p>${yyyy}-${mm}-${dd}</p>
                </div>
                <div class="club-details">
                    <p>Activity</p>
                    <p>Very Active</p>
                </div>
            `;
            document.getElementById('all-clubs').appendChild(d);
        })
    } catch(error) {
        console.error(error);
    }
}

fetchUser();
fetchUserStats();
totalGames();

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        fetchUser();
        fetchUserStats();
        totalGames();
        fetchTournaments();
        fetchHistory();
        fetchClubs();
    }
})

document.getElementById('overview').addEventListener('click', () => {
    window.location.href = `./?q=${q}&v=overview`;
});
document.getElementById('gamestats').addEventListener('click', () => {
    window.location.href = `./?q=${q}&v=gamestats`;
});
document.getElementById('history').addEventListener('click', () => {
    window.location.href = `./?q=${q}&v=history`;
});
document.getElementById('clubs').addEventListener('click', () => {
    window.location.href = `./?q=${q}&v=clubs`;
});
document.getElementById('tournaments').addEventListener('click', () => {
    window.location.href = `./?q=${q}&v=tournaments`;
});

if(page === 'overview') {
    overview();
} else if (page === 'gamestats') {
    gamestats();
} else if (page === 'history') {
    history();
} else if (page === 'clubs') {
    clubs();
} else if (page === 'tournaments') {
    tournaments();
}

function overview() {
    document.getElementById('overview').className = 'active';
}

async function gamestats() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}/stats`);
        const data = await res.json();

        const allRapid = data.chess_rapid ? data.chess_rapid.record.win + data.chess_rapid.record.draw + data.chess_rapid.record.loss : 0;
        const allBlitz = data.chess_blitz ? data.chess_blitz.record.win + data.chess_blitz.record.draw + data.chess_blitz.record.loss : 0;
        const allBullet = data.chess_bullet ? data.chess_bullet.record.win + data.chess_bullet.record.draw + data.chess_bullet.record.loss : 0;

        const rapidWin = data.chess_rapid ? data.chess_rapid.record.win : 0;
        const blitzWin = data.chess_blitz ? data.chess_blitz.record.win : 0;
        const bulletWin = data.chess_bullet ? data.chess_bullet.record.win : 0;

        const rapidWinRate = ((rapidWin / allRapid) * 100).toFixed(2);
        const blitzWinRate = ((blitzWin / allBlitz) * 100).toFixed(2);
        const bulletWinRate = ((bulletWin / allBullet) * 100).toFixed(2);
        
        document.getElementById('gamestats').className = 'active';
        document.getElementById('page').innerHTML = 
        `
        <div class="game-stats">
            <div class="profile-card">
                <div class="title">
                    <img src="../assets/chart-column-svgrepo-com.svg">
                    <h2>Rapid Statistics</h2>
                </div>
                <div class="mode-stats">
                    <div>
                        <h4>${data.chess_rapid ? data.chess_rapid.record.win : 0}</h4>
                        <p>Wins</p>
                    </div>
                    <div>
                        <h4>${data.chess_rapid ? data.chess_rapid.record.draw : 0}</h4>
                        <p>Draws</p>
                    </div>
                    <div>
                        <h4>${data.chess_rapid ? data.chess_rapid.record.loss : 0}</h4>
                        <p>Losses</p>
                    </div>
                </div>
                <div class="detailed-stats">
                    <div>
                        <p>Total Games</p>
                        <p>${allRapid}</p>
                    </div>
                    <div>
                        <p>Win Rate</p>
                        <p>${rapidWinRate}%</p>
                    </div>
                    <div>
                        <p>Peak rating</p>
                        <p>HMM</p>
                    </div>
                    <div>
                        <p>Avg rating</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div class="profile-card">
                <div class="title">
                    <img src="../assets/chart-column-svgrepo-com.svg">
                    <h2>Blitz Statistics</h2>
                </div>
                <div class="mode-stats">
                    <div>
                        <h4>${data.chess_blitz ? data.chess_blitz.record.win : 0}</h4>
                        <p>Wins</p>
                    </div>
                    <div>
                        <h4>${data.chess_blitz ? data.chess_blitz.record.draw : 0}</h4>
                        <p>Draws</p>
                    </div>
                    <div>
                        <h4>${data.chess_blitz ? data.chess_blitz.record.loss : 0}</h4>
                        <p>Losses</p>
                    </div>
                </div>
                <div class="detailed-stats">
                    <div>
                        <p>Total Games</p>
                        <p>${allBlitz}</p>
                    </div>
                    <div>
                        <p>Win Rate</p>
                        <p>${blitzWinRate}%</p>
                    </div>
                    <div>
                        <p>Peak rating</p>
                        <p>${data.chess_blitz ? data.chess_blitz.best.rating : 0}</p>
                    </div>
                    <div>
                        <p>Avg rating</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div class="profile-card">
                <div class="title">
                    <img src="../assets/chart-column-svgrepo-com.svg">
                    <h2>Bullet Statistics</h2>
                </div>
                <div class="mode-stats">
                    <div>
                        <h4>${data.chess_bullet ? data.chess_bullet.record.win : 0}</h4>
                        <p>Wins</p>
                    </div>
                    <div>
                        <h4>${data.chess_bullet ? data.chess_bullet.record.draw : 0}</h4>
                        <p>Draws</p>
                    </div>
                    <div>
                        <h4>${data.chess_bullet ? data.chess_bullet.record.loss : 0}</h4>
                        <p>Losses</p>
                    </div>
                </div>
                <div class="detailed-stats">
                    <div>
                        <p>Total Games</p>
                        <p>${allBullet}</p>
                    </div>
                    <div>
                        <p>Win Rate</p>
                        <p>${bulletWinRate}%</p>
                    </div>
                    <div>
                        <p>Peak rating</p>
                        <p>${data.chess_bullet ? data.chess_bullet.best.rating : 0}</p>
                    </div>
                    <div>
                        <p>Avg rating</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    } catch(error){
        console.error(error);
    }
}

function history() {
    document.getElementById('history').className = 'active';
    document.getElementById('page').innerHTML = 
    `
    <div class="history">
        <div class="profile-card">
            <div class="title">
                <img src="../assets/pulse-svgrepo-com.svg">
                <h2>Recent Game History</h2>
            </div>
            <div class="history-stats" id="new-games">
                <div class="history-header">
                    <p>Result</p>
                    <p>Opponent</p>
                    <p class="newRating">Rating</p>
                    <p>Mode</p>
                    <p>Opening</p>
                    <p>Time Control</p>
                    <p>Date</p>
                </div>
            </div>
        </div>
    </div>
    `;
    fetchHistory();
}

function tournaments() {
    document.getElementById('tournaments').className = 'active';
    document.getElementById('page').innerHTML = 
    `
    <div class="history">
        <div class="profile-card">
            <div class="title">
                <img src="../assets/trophy-svgrepo-com (1).svg">
                <h2>Tournament Results</h2>
            </div>
            <div class="history-stats" id="tourney">
                <div class="history-header">
                    <p class="longer">Tournament</p>
                    <p>Place</p>
                    <p>Participants</p>
                    <p>Status</p>
                    <p>Date</p>
                </div>
            </div>
        </div>
    </div>
    `;
    fetchTournaments();
}

function clubs() {
    document.getElementById('clubs').className = 'active';
    document.getElementById('page').innerHTML = 
    `
    <div class="history">
        <div class="profile-card">
            <div class="title">
                <img src="../assets/users-svgrepo-com (1).svg">
                <h2>Club Memberships</h2>
            </div>
            <div class="clubs" id="all-clubs">
            </div>
        </div>
    </div>
    `;
    fetchClubs();
}

function loader() {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 200);
}

document.getElementById('refresh').addEventListener('click', () => {
    window.location.href = `./?q=${q}&v=${page}`;
})