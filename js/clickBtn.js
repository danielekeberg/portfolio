const clickBtn = document.getElementById('clickBtn');
const clickRemoveBtn = document.getElementById('clickRemoveBtn');
const clickSpan = document.getElementById('clickSpan');
const progressBar = document.getElementById('progressBar');
const progressInput = document.getElementById('progressInput');
const progressRemoveInput = document.getElementById('progressRemoveInput');
const clickOneBtn = document.getElementById('clickOneBtn');
const clickRemoveOneBtn = document.getElementById('clickRemoveOneBtn');
// const maxClickInput = document.getElementById('maxClickInput');

let clickCount = 0;
const maxClicks = 100;
const minClicks = 0;

function lockBtn() {
    clickRemoveBtn.disabled = true;
}

lockBtn();

clickBtn.addEventListener("click", () => {
    if (clickCount < maxClicks) {
        clickCount += Number(progressInput.value);
        const progressPercentage = (clickCount / maxClicks) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
        clickRemoveBtn.disabled = false;
        clickSpan.style.color = "#9c9c9c";
    }

    if (clickCount >= maxClicks) {
        clickBtn.disabled = true;
        clickSpan.style.color = "green";
        clickCount = maxClicks;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
    }
});

clickRemoveBtn.addEventListener("click", () => {
    if (clickCount > minClicks) {
        clickCount -= Number(progressRemoveInput.value);
        if (clickCount < minClicks) {
            clickCount = minClicks;
        }
        const progressPercentage = (clickCount / maxClicks) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
        clickSpan.style.color = "#9c9c9c";
    }

    if (clickCount < minClicks) {
        clickRemoveBtn.disabled = true;
        clickSpan.style.color = "red";
        clickCount = minClicks;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
    }

    if (clickCount < maxClicks) {
        clickBtn.disabled = false;
        clickSpan.style.color = "#9c9c9c";
    }
});

clickOneBtn.addEventListener("click", () => {
    if (clickCount < maxClicks) {
        clickCount++;
        const progressPercentage = (clickCount / maxClicks) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
        clickRemoveBtn.disabled = false;
        clickRemoveOneBtn.disabled = false;
        clickSpan.style.color = "#9c9c9c";
    }

    if (clickCount >= maxClicks) {
        clickBtn.disabled = true;
        clickOneBtn.disabled = true;
        clickSpan.style.color = "green";
        clickCount = maxClicks;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
    }

    if (clickCount > maxClicks) {
        clickBtn.disabled = false;
        clickOneBtn.disabled = false;
        clickRemoveBtn.disabled = false;
        clickRemoveOneBtn.disabled = false;
    }
});

clickRemoveOneBtn.addEventListener("click", () => {
    if (clickCount > minClicks) {
        clickCount--;
        const progressPercentage = (clickCount / maxClicks) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
        clickSpan.style.color = "#9c9c9c";
        clickBtn.disabled = false;
        clickOneBtn.disabled = false;
    }

    if (clickCount < minClicks) {
        clickRemoveBtn.disabled = true;
        clickRemoveOneBtn.disabled = true;
        clickSpan.style.color = "red";
        clickCount = minClicks;
        progressBar.style.width = `${progressPercentage}%`;
        clickSpan.textContent = `${clickCount} / ${maxClicks}`;
    }

    if (clickCount < maxClicks) {
        clickBtn.disabled = false;
        clickOneBtn.disabled = false;
        clickSpan.style.color = "#9c9c9c";
    }
});