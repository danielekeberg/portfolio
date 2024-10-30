const hotell = document.getElementById("hotell");
const book = document.getElementById("inHotell");
const krims = document.getElementById("krim");
const crimes = document.querySelector(".crimes");
const krim = document.querySelectorAll(".krim");
const krimTekst = document.getElementById("krimTekst");

let isInHotell = true;
let krimPre = ["Du stjeler fra en gammel dame.", "Du raner en brus automat", "Du raner Deli de Luca", "Politiet så deg pisse i gaten. De havner i fengsel!", "Du faller og brekker armen", "Jeg har ikke flere forslag", "Mannen i kassen stanser deg"];

// hotellStatus();

// function bookHotell() {
//     crimes.innerHTML = `
//     <h3>Test</h3>
//     <div class="JSButtons">
//         <button id="inHotell" onclick="leaveHotell()" style="color: green;">Du er i hotell</button>
//         <button id="krims">Utfør krim</button>
//     </div>`;
//     let isInHotell = true;
// };


function updateHotell() {
    isInHotell = !isInHotell;
}

function hotellStatus() {
    document.getElementById("hotellStatus").innerText = `${isInHotell}`;
}

function bookHotell() {
    isInHotell = !isInHotell;
}

function booker() {
    updateHotell();
    if(isInHotell === true) {
        hotell.style.color = "white";
        hotell.style.background = "green";
        hotell.innerText = "Du er i hotell";
    } else {
        hotell.style.color = "white";
        hotell.style.background = "red";
        hotell.innerText = "Du er ikke i hotell";
    }
}

hotell.addEventListener("click", booker);

function krimFraHotell() {
    krim.innerText = "Du må ut av hotell for å gjøre denne handlingen!";
};

function krimUten() {
    krim.innerText = "Du stjeler noen kronasjer";
}

function enkelKrim() {
    if(isInHotell === true) {
        krimTekst.innerText = "Du må ut av hotell for å gjøre denne handlingen!";
    } else {
        const randomTall = Math.floor(Math.random() * krimPre.length);
        krimTekst.textContent = `${krimPre[(randomTall)]}`
        console.log("Krimtekst nummer: " + randomTall);
    }
};

krims.addEventListener("click", enkelKrim);

// krim.addEventListener("click", enkelKrim);

// function randomKrimTekst() {
//     const randomTall = Math.floor(Math.random() * krimPre.length);
// }