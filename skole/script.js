const container = document.getElementById('container');

function test() {
    container.innerHTML = `<p>Epic</p>`;
}

function loglog() {
    container.innerHTML = `<h1>BAHAHHA</h1>`;
}

function testreturn() {
    return test();
    return loglog();
}

function clock() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    container.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`;
}
setInterval(clock, 1000);

// testreturn();
clock();