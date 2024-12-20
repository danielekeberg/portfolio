const createDivContainer = document.querySelector(".createDivContainer");
const createNewDivBtn = document.getElementById("createNewDivBtn");
const newDiv = document.createElement("div");

function createNewDiv() {
    newDiv.classList.add("divContent");

    newDiv.innerHTML = `
    <div class="newContainer">
        <h3>Im just a chill christmas guy</h3>
        <img src="https://mafiaspillet.no/imgupload/418643.png">
        <div class="JSButtons">
            <button id="removeDiv">Remove Div</button>
        </div>
    </div>
    `;

    createDivContainer.appendChild(newDiv);
    const removeDiv = document.getElementById("removeDiv");
    removeDiv.addEventListener("click", removeNewDiv, { once: true });
}

function removeNewDiv() {
    if (newDiv.parentElement) {
        newDiv.parentElement.removeChild(newDiv);
    }
}

createNewDivBtn.addEventListener("click", createNewDiv);