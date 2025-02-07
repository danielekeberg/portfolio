let divNumber = 0;

function rng() {
    divNumber++;
    const max = document.getElementById('max').value.trim();
    const min = document.getElementById('min').value.trim();
    const maxNum = Number(max);
    const minNum = Number(min);
    const random = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;

    document.getElementById('display').textContent = random;

    const d = document.createElement('div');
    d.setAttribute('id', `${divNumber}`)
    console.log(d);

    const p = document.createElement('p');
    p.textContent = `You've generated a random number between ` + min + ` and ` + max + `!`;
    const p2 = document.createElement('p');
    p2.textContent = `The result was: ${random}`;
    console.log(divNumber);

    document.getElementById('history').appendChild(p);
    document.getElementById('history').appendChild(p2);

    document.getElementById(`${divNumber}`).appendChild(p);

    document.getElementById('history').appendChild(d);
}

document.getElementById('submit').addEventListener('click', rng);
document.getElementById('min').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        rng();
    }
})
document.getElementById('max').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        rng();
    }
})