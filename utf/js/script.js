
let getClicks = localStorage.getItem('click');

const clickCounter = document.getElementById('clickCounter');
const clickBtn = document.getElementById('click');

console.log(getClicks);

function addClicks() {
    localStorage.setItem('click', getClicks++)
}

function updateClicks() {
    clickCounter.textContent = `Click counter: ${getClicks}`;
    document.getElementById('progress-1').style.width = `${getClicks}%`;
    document.getElementById('progress-2').style.width = `${getClicks / 2.5}%`;
    document.getElementById('progress-3').style.width = `${getClicks / 5}%`;
    document.getElementById('progress-4').style.width = `${getClicks / 10}%`;

    if(getClicks >= 100) {
        document.getElementById('utf1').style.color = 'green';
    }
    if(getClicks >= 250) {
        document.getElementById('utf2').style.color = 'green';
    }
    if(getClicks >= 500) {
        document.getElementById('utf3').style.color = 'green';
    }
    if(getClicks >= 1000) {
        document.getElementById('utf4').style.color = 'green';
    }
}

clickBtn.addEventListener('click', updateClicks);
clickBtn.addEventListener('click', addClicks);

updateClicks();
