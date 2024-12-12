const clickBtn = document.getElementById('clickBtn');
const clickRemoveBtn = document.getElementById('clickRemoveBtn');
const clickSpan = document.getElementById('clickSpan');
const progressBar = document.getElementById('progressBar');

// let clickCount = 0;

// function clickCounter() {
//     clickCount++;
//     clickSpan.textContent = clickCount + ' / 20';
//     if (clickCount === 20) {
//         clickSpan.style.color = 'green';
//     }
//     if (clickCount === 69) {
//         clickSpan.style.color = 'yellow';
//         clickSpan.textContent = clickCount + ' Nice!';
//     }
// }

// clickBtn.addEventListener('click', clickCounter);

let clickCount = 0;
const maxClicks = 20;
const minClicks = 0;

function lockBtn() {
    clickRemoveBtn.disabled = true;
}

lockBtn();

clickBtn.addEventListener("click", () => {
    if (clickCount < maxClicks) {
        clickCount++;
        const progressPercentage = (clickCount / maxClicks) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
        clickRemoveBtn.disabled = false;
    }

    if (clickCount === maxClicks) {
        clickBtn.disabled = true;
        clickRemoveBtn.disabled = false;
    }
});

clickRemoveBtn.addEventListener("click", () => {
    if (clickCount < maxClicks) {
        clickCount--;
        const progressPercentage = (clickCount / maxClicks) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
    }

    if (clickCount === minClicks) {
        clickRemoveBtn.disabled = true;
    }
});