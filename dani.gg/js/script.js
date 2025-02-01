import { apiKey, puuid, apiUrl, summonerId } from './config.js';

const params = new URLSearchParams(window.location.search);
const selectedSummoner = params.get('summoner');
const selectedTag = params.get('tag');

let newPuuid = localStorage.setItem('puuid', '');
// let newAccountId = localStorage.setItem('accountId', '');
let newGameName = localStorage.setItem('gameName', '');
let newTagLine = localStorage.setItem('tagLine', '');

async function fetchUser() {
    try {
        const response = await fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Chance/11111?api_key=${apiKey}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
                "Accept-Language": "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com/"
            }
        });

        const data = await response.json();
        console.log(selectedSummoner);
        document.getElementById('gameName').textContent = `${data.gameName}`;
        document.getElementById('tagLine').textContent = `${data.tagLine}`;
        localStorage.setItem('puuid', data.puuid);
        console.log(data.puuid)
        localStorage.setItem('puuid', data.gameName);
        localStorage.setItem('puuid', data.tagLine);
    }
    catch(error) {
        console.error(error);
    }
}

fetchUser();

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

async function fetchRank() {
    try {
        const response = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${apiKey}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
                "Accept-Language": "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com/"
            }
        });
        const data = await response.json();
        const flexTier = data[0].tier;
        const flexFormatted = capitalizeFirstLetter(flexTier);
        const flexTierLowercased = data[0].tier.toLowerCase();
        const soloTier = data[1].tier;
        const soloFormatted = capitalizeFirstLetter(soloTier);
        const soloTierLowercased = data[1].tier.toLowerCase();
        const SWR = data[1].wins / (data[1].wins + data[1].losses) * 100;
        const soloWinRate = SWR.toFixed(0);
        const FWR = data[1].wins / (data[1].wins + data[0].losses) * 100;
        const flexWinRate = FWR.toFixed(0);

        console.log(data);
        document.getElementById('soloRank').textContent = `${data[1].rank}`;
        document.getElementById('soloTier').textContent = `${soloFormatted}`;
        document.getElementById('soloLeaguePoints').textContent = `${data[1].leaguePoints} LP`;

        document.getElementById('flexRank').textContent = `${data[0].rank}`;
        document.getElementById('flexTier').textContent = `${flexFormatted}`;
        document.getElementById('flexLeaguePoints').textContent = `${data[0].leaguePoints} LP`;

        document.getElementById('flexwin').textContent = `${data[0].wins} W`;
        document.getElementById('flexloss').textContent = `${data[0].losses} L`;

        document.getElementById('solowin').textContent = `${data[1].wins} W`;
        document.getElementById('sololoss').textContent = `${data[1].losses} L`;

        document.getElementById('soloRank').src = `https://static.bigbrain.gg/assets/lol/ranks/s13/${soloTierLowercased}.png`;
        document.getElementById('flexRank').src = `https://static.bigbrain.gg/assets/lol/ranks/s13/${flexTierLowercased}.png`;

        document.getElementById('soloWinrate').textContent = `${soloWinRate}% Win Rate`;
        document.getElementById('flexWinrate').textContent = `${flexWinRate}% Win Rate`;
    }
    catch(error) {
        console.error(error);
    }
}

fetchRank();

async function fetchMatches() {
    try {
        const response = await fetch(`${apiUrl}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
                "Accept-Language": "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com/"
            }
        });
        
        console.log(response);
        if(!response.ok) {
            const errorDetails = await response.text();
            switch (response.status) {
                case 400:
                    console.error('Bad Request: Verify your API key, PUUID, or query parameters');
                    break;
                case 401:
                    console.error('Unauthorized: Check your API key or permissions');
                    break;
                case 403:
                    console.error('Forbidden: Your API key may be inactive or blocked.');
                    break;
                case 429:
                    console.error('Rate limit exceeded: Too many requests. Wait and try again.');
                    break;
                default:
                    console.error(`Unexpected error: ${errorDetails}`);
            }
            throw new Error(`Error fetching API data: ${errorDetails}`)
        }

        const data = await response.json();

        data.forEach(match => {
            const d = document.createElement('div');
            d.className = "match";
            d.innerHTML = `
            <div class="retrieve-matchID" id="matchDetails" data-match="${match}"></div>
            `;
            document.getElementById('matchOverview').appendChild(d);
            postMatch(match);

        })
    }
    catch(error) {
        console.error(error);
    }
}

fetchMatches();

async function postMatch(match) {
    try {
        const response = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${apiKey}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
                "Accept-Language": "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com/"
            }
        });

        const data = await response.json();
        const kda = data.info.participants[1].challenges.kda.toFixed(2);
        const userPuuid = puuid;
        const participant = data.info.participants.find(p => p.puuid === userPuuid);
        if(!participant) {
            console.error('Participant not found for user!');
            return;
        }
        console.log(`Found participant: ${participant}`);

        const didWin = participant.win;

        if (didWin) {
            document.getElementById('didWin').textContent = 'WIN';
            document.getElementById('matchStatus').className = 'match win';
        }

        const b = document.createElement('div');
        b.className = "match-history";
        b.innerHTML = `
        <div id="matchStatus" class="match loss">
            <div class="match-mode">
                <p><strong>${data.info.gameMode}</strong></p>
                <p id="gameTime">${new Date(data.info.gameStartTimestamp).toLocaleString()}</p>
                <p id="didWin">LOSS</p>
            </div>
            <div class="champ">
                <div class="champ-pb">
                    <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${participant.championName}.png" alt="${data.info.participants[1].championName}">
                </div>
                <div class="champ-summs">
                    <div class="summs">
                        <img src="#">
                        <img src="#">
                    </div>
                    <div class="runes">
                        <img src="#">
                        <img src="#">
                    </div>
                </div>
            </div>
            <div class="match-stats">
                <h4>${participant.kills} / <span>${participant.deaths}</span> / ${participant.assists}</h4>
                <p>${kda} KDA</p>
                <p>${participant.totalMinionsKilled} CS</p>
            </div>
            <div class="items">
                <img src="#" alt="item">
                <img src="#" alt="item">
                <img src="#" alt="item">
                <img src="#" alt="item">
                <img src="#" alt="item">
                <img src="#" alt="item">
                <img src="#" alt="item">
            </div>
            <div class="teams">
                <div class="team">
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[0].championName}.png" alt="${data.info.participants[0].championName}">
                        <p>${data.info.participants[0].summonerName}</p>
                    </div>
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[1].championName}.png" alt="${data.info.participants[1].championName}">
                        <p>${data.info.participants[1].summonerName}</p>
                    </div>
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[2].championName}.png" alt="${data.info.participants[2].championName}">
                        <p>${data.info.participants[2].summonerName}</p>
                    </div>
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[3].championName}.png" alt="${data.info.participants[3].championName}">
                        <p>${data.info.participants[3].summonerName}</p>
                    </div>
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[4].championName}.png" alt="${data.info.participants[4].championName}">
                        <p>${data.info.participants[4].summonerName}</p>
                    </div>
                </div>
                <div class="team">
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[5].championName}.png" alt="${data.info.participants[5].championName}">
                        <p>${data.info.participants[5].summonerName}</p>
                    </div>
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[6].championName}.png" alt="${data.info.participants[6].championName}">
                        <p>${data.info.participants[6].summonerName}</p>
                    </div>
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[7].championName}.png" alt="${data.info.participants[7].championName}">
                        <p>${data.info.participants[7].summonerName}</p>
                    </div>
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[8].championName}.png" alt="${data.info.participants[8].championName}">
                        <p>${data.info.participants[8].summonerName}</p>
                    </div>
                    <div class="player">
                        <img src="https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/champion/${data.info.participants[9].championName}.png" alt="${data.info.participants[9].championName}">
                        <p>${data.info.participants[9].summonerName}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        // if (data.info.participants[2].win) {
        //     b.className = "match win";
        // } else {
        //     b.className = "match loss";
        // }
        document.getElementById('matchDetails').appendChild(b);
    }
    catch(error) {
        console.error(error);
    }
}

function searchUser() {
    const summonerInput = document.getElementById('summonerInput').value;
    const tagInput = document.getElementById('tagInput').value;

    window.location.href = `./profile/?summoner=${summonerInput}?tag=${tagInput}`;
}

document.getElementById('summonerBtn').addEventListener('click', searchUser);

async function fetchUserStats() {
    try {
        const response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
                "Accept-Language": "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com/"
            }
        });
        const data = await response.json();
        document.getElementById('summonerLevel').textContent = `${data.summonerLevel}`;
        document.getElementById('profileIconId').src = `https://static.bigbrain.gg/assets/lol/riot_static/15.2.1/img/profileicon/${data.profileIconId}.png`;
    }
    catch (error) {
        console.error(error);
    }
}

fetchUserStats();