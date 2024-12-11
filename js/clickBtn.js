const clickBtn = document.getElementById('clickBtn');
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

clickBtn.addEventListener("click", () => {
    if (clickCount < maxClicks) {
        clickCount++;
        const progressPercentage = (clickCount / maxClicks) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
    }

    if (clickCount === maxClicks) {
        clickBtn.disabled = true;
        clickBtn.textContent = "You've reached the limit!";
    }
});