const rapportBtn = document.getElementById('rapport-btn');
const rapportBtnOn = document.getElementById('rapport-btn-on');

function turnOnRapport() {
    document.getElementById('rapport-feed-off').innerHTML = `
    <div class="rapport">
        <img src="https://mafiaspillet.no/images/icons/butikk_lys.png">
        <p>Nocturnal | London</p>
    </div>
    <div class="rapport">
        <img src="https://mafiaspillet.no/images/icons_utfordringer/krim.png">
        <p>Nocturnal | London</p>
    </div>
    <div class="rapport">
        <img src="https://mafiaspillet.no/images/icons_utfordringer/undersotter.png">
        <p>Nocturnal | London</p>
    </div>
    <div class="rapport">
        <img src="https://mafiaspillet.no/images/icons_utfordringer/drap.png">
        <p><span>CP Pilsner</span> | Oslo</p>
    </div>
    `;

    rapportBtn.style.display = 'none';
    rapportBtnOn.style.display = 'block';

    document.getElementById('turnOnRapportFeed').style.display = 'block';
    document.getElementById('turnOnRapportFeed').style.opacity = '1';
    setTimeout(() => {
        document.getElementById('turnOnRapportFeed').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('turnOnRapportFeed').style.display = 'none';
        }, 300);
    }, 2000);

}

function turnOffRapport() {
    document.getElementById('rapport-feed-off').textContent = `
    Overvåking er ikke aktivert. Aktiveres når du utfører en kriminell handling, og skrur seg av etter en time uten aktivitet.
    `;


    rapportBtn.style.display = 'block';
    rapportBtnOn.style.display = 'none';
}

rapportBtn.addEventListener('click', turnOnRapport);
rapportBtnOn.addEventListener('click', turnOffRapport);

function skytError() {
    document.getElementById('skuddError').style.display = 'block';
    document.getElementById('skuddError').style.opacity = '1';
    setTimeout(() => {
        document.getElementById('skuddError').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('skuddError').style.display = 'none';
        }, 300);
    }, 2000);
}

document.getElementById('skyt').addEventListener('click', skytError);

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.querySelector('.current-time').innerHTML = `<p><strong>Tid:</strong> ${currentTime}</p>`;
}

setInterval(updateTime, 1000);
updateTime();