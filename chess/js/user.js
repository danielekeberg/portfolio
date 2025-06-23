const params = new URLSearchParams(window.location.search);
const q = params.get('username');
const page = params.get('v');

async function fetchUser() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}`);
        const data = await res.json();
        console.log(data);

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
        document.getElementById('loader').remove();
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
        console.log(data);
        const allGames = data.chess_blitz ? data.chess_blitz.record.win + data.chess_blitz.record.draw + data.chess_blitz.record.loss : 0 + data.chess_rapid ? data.chess_rapid.record.win + data.chess_rapid.record.draw + data.chess_rapid.record.loss : 0 + data.chess_bullet ? data.chess_bullet.record.win + data.chess_bullet.record.draw + data.chess_bullet.record.loss : 0;
        const allWins = data.chess_blitz ? data.chess_blitz.record.win : 0 + data.chess_rapid ? data.chess_rapid.record.win : 0 + data.chess_bullet ? data.chess_bullet.record.win : 0;
        const allDraws = data.chess_blitz ? data.chess_blitz.record.draw : 0 + data.chess_rapid ? data.chess_rapid.record.draw : 0 + data.chess_bullet ? data.chess_bullet.record.draw : 0;
        const allLosses = data.chess_blitz ? data.chess_blitz.record.loss : 0 + data.chess_rapid ? data.chess_rapid.record.loss : 0 + data.chess_bullet ? data.chess_bullet.record.loss : 0;
        document.getElementById('total').textContent = allGames;
        document.getElementById('wins').textContent = allWins;
        document.getElementById('draws').textContent = allDraws;
        document.getElementById('loss').textContent = allLosses;

        const winrate = ((allWins / allGames) * 100);
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

        document.getElementById('rapidPeak').textContent = `Best: ${data.chess_rapid ? data.chess_rapid.best.rating : 0}`;
        document.getElementById('blitzPeak').textContent = `Best: ${data.chess_blitz ? data.chess_blitz.best.rating : 0}`;
        document.getElementById('bulletPeak').textContent = `Best: ${data.chess_bullet ? data.chess_bullet.best.rating : 0}`;
        document.getElementById('rapidGames').textContent = (data.chess_rapid.record.win + data.chess_rapid.record.draw + data.chess_rapid.record.loss) + ' games';
        document.getElementById('blitzGames').textContent = (data.chess_blitz.record.win + data.chess_blitz.record.draw + data.chess_blitz.record.loss) + ' games';
        document.getElementById('bulletGames').textContent = (data.chess_bullet.record.win + data.chess_rapid.record.draw + data.chess_bullet.record.loss) + ' games';
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

async function fetchTournaments() {
    try {
        const res = await fetch(`https://api.chess.com/pub/player/${q}/tournaments`);
        const data = await res.json();
        console.log(data);
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

let gameLength = 0;
async function fetch10Games(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        gameLength = Number(data.games.length - 1);
        for(let i = 0; i < 10; i++) {
            const d = document.createElement('div');
            d.className = 'history-header game';
            

            console.log(i)
            console.log(data.games[gameLength]);
            console.log(data.games[gameLength].end_time);
            const timestamp = data.games[gameLength].end_time;
            const date = new Date(timestamp * 1000);
            const yyyy = date.getUTCFullYear();
            const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
            const dd = String(date.getUTCDate()).padStart(2, '0');
            console.log(`${yyyy}-${mm}-${dd}`);

            d.innerHTML = 
            `
            <p>win</p>
            <p>magnus-carlsen</p>
            <p>2842</p>
            <p>10+0</p>
            <p>Scillian Defense</p>
            <p>42</p>
            <p>${yyyy}-${mm}-${dd}</p>
            `;
            document.getElementById('new-games').appendChild(d);
            gameLength--;
        }
    } catch(error) {
        console.log(error);
    }
}

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        fetchUser();
        fetchUserStats();
        totalGames();
        // fetchTournaments();
        fetchHistory();
    }
})

document.getElementById('overview').addEventListener('click', () => {
    window.location.href = `./?username=${q}&v=overview`;
});
document.getElementById('gamestats').addEventListener('click', () => {
    window.location.href = `./?username=${q}&v=gamestats`;
});
document.getElementById('history').addEventListener('click', () => {
    window.location.href = `./?username=${q}&v=history`;
});
document.getElementById('clubs').addEventListener('click', () => {
    window.location.href = `./?username=${q}&v=clubs`;
});
document.getElementById('tournaments').addEventListener('click', () => {
    window.location.href = `./?username=${q}&v=tournaments`;
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

function gamestats() {
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
                    <h4>0</h4>
                    <p>Wins</p>
                </div>
                <div>
                    <h4>0</h4>
                    <p>Draws</p>
                </div>
                <div>
                    <h4>0</h4>
                    <p>Losses</p>
                </div>
            </div>
            <div class="detailed-stats">
                <div>
                    <p>Avg rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Peak rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Lowest rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Avg Game Time</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Total Time</p>
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
                    <h4>0</h4>
                    <p>Wins</p>
                </div>
                <div>
                    <h4>0</h4>
                    <p>Draws</p>
                </div>
                <div>
                    <h4>0</h4>
                    <p>Losses</p>
                </div>
            </div>
            <div class="detailed-stats">
                <div>
                    <p>Avg rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Peak rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Lowest rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Avg Game Time</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Total Time</p>
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
                    <h4>0</h4>
                    <p>Wins</p>
                </div>
                <div>
                    <h4>0</h4>
                    <p>Draws</p>
                </div>
                <div>
                    <h4>0</h4>
                    <p>Losses</p>
                </div>
            </div>
            <div class="detailed-stats">
                <div>
                    <p>Avg rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Peak rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Lowest rating</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Avg Game Time</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Total Time</p>
                    <p>0</p>
                </div>
            </div>
        </div>
    </div>
    `;
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
                    <p>Rating</p>
                    <p>Time Control</p>
                    <p>Opening</p>
                    <p>Moves</p>
                    <p>Date</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

function tournaments() {
    document.getElementById('tournaments').className = 'active';
}

function clubs() {
    document.getElementById('clubs').className = 'active';
}