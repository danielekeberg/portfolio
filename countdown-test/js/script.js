const countdown = document.getElementById('countdown');
const lapC = document.getElementById('lap');
let tid = 60;
let lap = 0;

function display() {
    countdown.textContent = tid;
}

function down() {
    tid --;
    countdown.textContent = tid;
    if(tid < 0) {
        lap++;
        lapC.textContent = lap;
        tid = 60;
        countdown.textContent = tid;

    }
}

function start() {
    setInterval(down, 1000);
}

start();
display();