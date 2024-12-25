function createDiv() {
    const newPop = document.createElement("div");
    newPop.classList.add("pop");
    newPop.innerHTML = `
    <div class="pop-img">
        <img src="https://mafiaspillet.no/img/hjemsidevarsler/happyhour_lys.png">
    </div>
    <div class="pop-text">
        <h3>Happyhour</h3>
        <p>Det blir HappyHour fra <strong>&nbspi dag&nbsp</strong> kl 17:00 til <strong>&nbspi dag&nbsp</strong> kl 18:00.</p>
        <button class="pop-remove" id="remove-child">Fjern denne meldingen</button>
    </div>
    `;

    newPop.querySelector("#remove-child").addEventListener("click", function () {
        newPop.style.opacity = "0";
        setTimeout(() => {
            newPop.remove();
        }, 400);
    });

    document.getElementById("divHolder").appendChild(newPop);
}

document.getElementById("createTheDiv").addEventListener("click", createDiv);