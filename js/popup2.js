const popup2btn = document.getElementById("popup2btn");
const poppern = document.createElement("div");
const currentPopupContainer = document.querySelector(".currentPopupContainer");

function popup2() {
    poppern.classList.add("popup2");

    poppern.innerHTML = `
    <div class="popup2-container">
        <h3>This is the popup container</h3>
        <div class="JSButtons">
            <button id="removePopup2btn">Remove popup</button>
        </div>
    </div>
    `;

    currentPopupContainer.appendChild(poppern);
    const removePopup2btn = document.getElementById("removePopup2btn");
    removePopup2btn.addEventListener("click", removePopup2, { once: true});
}

function removePopup2() {
    if (poppern.parentElement) {
        poppern.parentElement.removeChild(poppern);
    }
}

popup2btn.addEventListener("click", popup2);