const apiKey = "C56FA24F13EEE80A2F73A6FF4F233E6F";
const steamId = "76561198369432059";
const apiUrl = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002";

async function fetchSteamData() {
    document.getElementById('apiKey').textContent = apiKey;
    try {
        const response = await fetch(`https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=C56FA24F13EEE80A2F73A6FF4F233E6F&steamid=76561198369432059&relationship=friend`);
        

        const data = await response.json();
        console.log(data);

    } catch(error) {
        const d = document.createElement("div");
        d.className = 'error';
        d.textContent = error;

        document.getElementById('container').appendChild(d);
        document.querySelector('.error').title = error;
    }
}

fetchSteamData();
