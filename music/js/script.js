import { clientId, clientSecret, redirectUri, scopes } from './config.js';

const token = 'BQCCKLABschLAxy-LeUB_5hsSREdBjmcCs7reLQMd4eanFZ8oI7PLULrUBCbS5OkuVAjxPm9-RTA9TshLKZk6g6bL_tCwEAXgso7zflHEaPzX8Yk4PcM4NtjejlElrYtRD-q4cazV96OBcZChkBssYab3ZmjtxXR3TreMtLBf6UtNr00NCSAboYBh_TiAXMCK3G5hbsF6eNJoF-tRxnTzONHo1Q2U3ADA9qAgVvC1u6dfCHBRpPiNmc0lifG2h4xpcgvKMv6IMKolcb0id1eug3n9MxGtUZDcrZq';

async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/v1/me/shows?offset=0&limit=20`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks() {
    return (await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=5', 'GET')).items;
}

const topTracks = await getTopTracks();
console.log(
    topTracks?.map(
        ({name, artist}) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);

document.getElementById('loginBtn').addEventListener('click', () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location = authUrl;
});

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = localStorage.getItem('spotifyAccessToken');

    if (!token) {
        console.log('No access token found. Please log in.');
        return;
    }

    const player = new Spotify.Player({
        name: 'Daniel’s Web Player',
        getOAuthToken: cb => { cb(token); },
        volume: 1
    });

    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        playTrack(device_id, token);
    });

    player.connect();
};

document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('spotifyAccessToken');
    console.log('Successfully logged out!');
    window.location.href = './';
});

async function playTrack(device_id, token) {
    const trackUri = 'spotify:track:3n3Ppam7vgaVa1iaRUc9Lp';

    await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
        method: 'PUT',
        body: JSON.stringify({ uris: [trackUri] }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

