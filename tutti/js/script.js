function tuttiTimer() {
    const getHour = Number(document.getElementById('hour').value);
    let addCooldown = getHour + 18;
    // const numberToString = String(addCooldown).padStart(2, '0');

    if(getHour > 24) {
        document.getElementById('tutti1').innerHTML = '<p>Oppdrag 2: <span style="color: red">Error</span></p>';
        return;
    }

    if(getHour >= 6) {
        document.getElementById('tutti1').textContent = 'Oppdrag 2: ' + (addCooldown - 24);
        document.getElementById('tutti2').textContent = 'Oppdrag 3: ' + ((addCooldown + 18) > 24 ? addCooldown + 18 - 24 : addCooldown + 18 - 24 -24);
    } else {
        document.getElementById('tutti1').textContent = 'Oppdrag 2: ' + addCooldown;
        document.getElementById('tutti2').textContent = 'Oppdrag 3: ' + (addCooldown + 18 >= 24 ? addCooldown + 18 - 24 : addCooldown + 18 - 24 -24);
    }
}

document.getElementById('hour').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        tuttiTimer();
    }
})