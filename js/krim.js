const hotell = document.getElementById("hotell");
const book = document.getElementById("inHotell");
const krims = document.getElementById("krim");
const crimes = document.querySelector(".crimes");
const krim = document.querySelectorAll(".krim");
const krimTekst = document.getElementById("krimTekst");

let isInHotell = true;

const stjelPenger = Math.floor(Math.random() * (900 - 500)) + 500;
const ranAutomat = Math.floor(Math.random() * (2000 - 500)) + 500;
const deliPenger = Math.floor(Math.random() * (10000 - 5000)) + 5000;


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

// function randomPenger() {
//     const stjelPenger = Math.floor(Math.random() * 900);
//     krimPre[(1)] = `Du stjeler ${stjelPenger} fram en gammel dame`;
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
    if(isInHotell) {
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
    const krimPre = [
        `Du stjeler ${stjelPenger} kroner fra en gammel dame.`,
        `Du raner en brus automat og får tak i ${ranAutomat} kroner.`,
        `Du raner Deli de Luca og tar med deg ${deliPenger} kroner.`,
        `Politiet så deg pisse i gaten. Du havner i fengsel og du får en bot på 5000 kroner.`,
        `Du faller og brekker armen.`,
        `Jeg har ikke flere forslag.`,
        `Mannen i kassen stanser deg.`
    ];
    if(isInHotell) {
        krimTekst.innerText = "Du må ut av hotell for å gjøre denne handlingen!";
    } else {
        const randomTall = Math.floor(Math.random() * krimPre.length);
        

        const krimTekstNummer = randomTall + 1;
        krimTekst.textContent = `${krimPre[(randomTall)]}`
        console.log("Krimtekst nummer: " + krimTekstNummer);
    
        // if (krimPre[(randomTall)]) {
        //     const randomPenger = Math.floor(Math.random() * (900 - 500)) + 500;
        //     krimTekst.textContent = `Du stjeler ${randomPenger} kroner fra en gammel dame`;
        // }
        // if (krimPre[(randomTall)]) {
        //     const miniPenger = Math.floor(Math.random() * (10000 - 5000)) + 5000;
        //     krimTekst.textContent = `Du bryter opp en minibank og stjeler ${miniPenger} kroner`;
        // }
    }
};

krims.addEventListener("click", enkelKrim);

// krim.addEventListener("click", enkelKrim);

// function randomKrimTekst() {
//     const randomTall = Math.floor(Math.random() * krimPre.length);
// }