const hotell = document.getElementById("hotell");
// const book = document.getElementById("inHotell");
const krims = document.getElementById("krim");
const crimes = document.querySelector(".crimes");
const krim = document.querySelectorAll(".krim");
const krimTekst = document.getElementById("krimTekst");

const enkelKnapp = document.getElementById("enkelKnapp");
const tungKnapp = document.getElementById("tungKnapp");

const enkelCheckEn = document.getElementById("enkelEn");
const enkelCheckTo = document.getElementById("enkelTo");
const enkelCheckTre = document.getElementById("enkelTre");
const enkelKrimEnTekst = document.getElementById("enkelEnTekst");
const enkelKrimToTekst = document.getElementById("enkelToTekst");
const enkelKrimTreTekst = document.getElementById("enkelTreTekst");

const tungCheckEn = document.getElementById("tungEn");
const tungCheckTo = document.getElementById("tungTo");
const tungKrimEnTekst = document.getElementById("tungEnTekst");
const tungKrimToTekst = document.getElementById("tungToTekst");

let isInHotell = true;
let previousIndex = -1;




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
        enkelKnapp.textContent = "Gå ut av hotell for å gjennomføre";
        tungKnapp.textContent = "Gå ut av hotell for å gjennomføre";
        enkelKnapp.addEventListener("mouseover", function() {
            enkelKnapp.style.cursor = "default";
            enkelKnapp.style.background = "#171717";
            enkelKnapp.disabled = true;
        });
        tungKnapp.addEventListener("mouseover", function() {
            tungKnapp.style.cursor = "default";
            tungKnapp.style.background = "#171717";
            tungKnapp.disabled = true;
        });
    } else {
        hotell.style.color = "white";
        hotell.style.background = "red";
        hotell.innerText = "Du er ikke i hotell";
        enkelKnapp.textContent = "Utfør!";
        tungKnapp.textContent = "Utfør!";
        enkelKnapp.addEventListener("mouseover", function() {
            enkelKnapp.style.cursor = "pointer";
            enkelKnapp.style.background = "#313131";
            enkelKnapp.disabled = false;
        });
        enkelKnapp.addEventListener("mouseleave", function() {
            enkelKnapp.style.background = "#171717";
        });
        tungKnapp.addEventListener("mouseover", function() {
            tungKnapp.style.cursor = "pointer";
            tungKnapp.style.background = "#313131";
            tungKnapp.disabled = false;
        });
        tungKnapp.addEventListener("mouseleave", function() {
            tungKnapp.style.background = "#171717";
        });
    }
}

hotell.addEventListener("click", booker);

// function krimFraHotell() {
//     krim.innerText = "Du må ut av hotell for å gjøre denne handlingen!";
// };

// function krimUten() {
//     krim.innerText = "Du stjeler noen kronasjer";
// }

function enkelKrim() {
    const miniPenger = Math.floor(Math.random() * (900 - 500)) + 500;
    const mediumPenger = Math.floor(Math.random() * (2000 - 500)) + 500;
    const storePenger = Math.floor(Math.random() * (10000 - 5000)) + 5000;

    const krimPre = [
        `Du stjeler ${miniPenger} kroner fra en gammel dame.`,
        `Du raner en brus automat og får tak i ${mediumPenger} kroner.`,
        `Du raner Deli de Luca og tar med deg ${storePenger} kroner.`,
        `Du blir stoppet av politiet og får en bot på ${mediumPenger} kroner.`,
        `Du faller og brekker armen. Du betaler ${miniPenger} på sykehuset.`,
        `Jeg har ikke flere forslag, men her får du ${storePenger} kroner.`,
        `Mannen i kassen stanser deg og du gir tilbake de ${miniPenger} kronene du tok.`
    ];



    if(isInHotell) {
        krimTekst.innerText = "Du må ut av hotell for å gjøre denne handlingen!";
    } else {
        let randomTall;

        do {
            randomTall = Math.floor(Math.random() * krimPre.length);
        } while (randomTall === previousIndex);

        previousIndex = randomTall;

        // const randomTall = Math.floor(Math.random() * krimPre.length);
        
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



// function endreFargeRed() {
//     enkelKnapp.style.color = "red";
// };

// function endreFargeGreen() {
//     tungKnapp.style.color = "green";
// }

// enkelKnapp.addEventListener("click", endreFargeRed);
// tungKnapp.addEventListener("click", endreFargeGreen);

function enkelValgEn() {
    enkelCheckEn.style.display = "none";
    // enkelKrimEnTekst.style.display = "none";
    enkelKrimEnTekst.textContent = "Du tæsjer 50 kroner brur";
    enkelCheckTo.style.display = "none";
    enkelKrimToTekst.style.display = "none";
    enkelCheckTre.style.display = "none";
    enkelKrimTreTekst.style.display = "none";
    enkelKnapp.style.display = "none";
}

function enkelValgTo() {
    enkelCheckEn.style.display = "none";
    enkelKrimEnTekst.style.display = "none";
    enkelCheckTo.style.display = "none";
    enkelKrimToTekst.textContent = "Du tæsjer 500 kroner brur";
    enkelCheckTre.style.display = "none";
    enkelKrimTreTekst.style.display = "none";
    enkelKnapp.style.display = "none";
}

function enkelValgTre() {
    enkelCheckEn.style.display = "none";
    enkelKrimEnTekst.style.display = "none";
    enkelCheckTo.style.display = "none";
    enkelKrimToTekst.style.display = "none";
    enkelCheckTre.style.display = "none";
    enkelKrimTreTekst.textContent = "Du tæsjer 5000 kroner brur";
    enkelKnapp.style.display = "none";
}

enkelKnapp.addEventListener("click", doCrime);

function doCrime() {
    if(enkelCheckEn.checked) {
        enkelValgEn();
    }
    if(enkelCheckTo.checked) {
        enkelValgTo();
    }
    if(enkelCheckTre.checked) {
        enkelValgTre();
    }
};

