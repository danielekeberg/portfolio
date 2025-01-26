import { clientId, redirectUri, scopes } from './config.js';

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

async function displayTrack() {

}