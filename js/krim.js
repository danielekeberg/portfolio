const hotell = document.getElementById("hotell");
// const book = document.getElementById("inHotell");
const krims = document.getElementById("krim");
const crimes = document.querySelector(".crimes");
const krim = document.querySelectorAll(".krim");
const krimTekst = document.getElementById("krimTekst");
const krimCounter = document.getElementById("krimCounter");
const pengeCounterP = document.getElementById("pengeCounter");


const enkelKnapp = document.getElementById("enkelKnapp");
const tungKnapp = document.getElementById("tungKnapp");
const giPenger = document.getElementById("giPenger");

const enkelCheckEn = document.getElementById("enkelEn");
const enkelCheckTo = document.getElementById("enkelTo");
const enkelCheckTre = document.getElementById("enkelTre");
const enkelKrimEnTekst = document.getElementById("enkelEnTekst");
const enkelKrimToTekst = document.getElementById("enkelToTekst");
const enkelKrimTreTekst = document.getElementById("enkelTreTekst");

const tungCheckEn = document.getElementById("tungEn");
const tungCheckTo = document.getElementById("tungTo");
const tungCheckTre = document.getElementById("tungTre");
const tungKrimEnTekst = document.getElementById("tungEnTekst");
const tungKrimToTekst = document.getElementById("tungToTekst");
const tungKrimTreTekst = document.getElementById("tungTreTekst");


let isInHotell = true;
let previousIndex = -1;
let crimeCounter = 0;
let pengeCounter = 0;

let enkelCountdown;
let tungCountdown;
// let enkelVt = 5;
// let tungVt = 10;



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

function resetEnkel() {
    enkelCheckEn.style.display = "flex";
    enkelKrimEnTekst.style.display = "flex";
    enkelKrimEnTekst.textContent = "Ran tigger på Karl Johan";
    enkelCheckTo.style.display = "flex";
    enkelKrimToTekst.style.display = "flex";
    enkelKrimToTekst.textContent = "Ran en tilfeldig person på gata";
    enkelCheckTre.style.display = "flex";
    enkelKrimTreTekst.style.display = "flex";
    enkelKrimTreTekst.textContent = "Ran en drosjesjåfør";
    enkelKnapp.style.display = "block";
}

function resetTung() {
    tungCheckEn.style.display = "flex";
    tungKrimEnTekst.style.display = "flex";
    tungKrimEnTekst.textContent = "Ran en kebab-kiosk";
    tungCheckTo.style.display = "flex";
    tungKrimToTekst.style.display = "flex";
    tungKrimToTekst.textContent = "Ran Narvesen";
    tungCheckTre.style.display = "flex";
    tungKrimTreTekst.style.display = "flex";
    tungKrimTreTekst.textContent = "40k på grønn";
    tungKnapp.style.display = "block";
}

function enkelValgEn() {
    const enkelValgEn = Math.floor(Math.random() * (900 - 500)) + 500;
    pengeCounter += enkelValgEn;
    pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
    enkelCheckEn.style.display = "none";
    // enkelKrimEnTekst.style.display = "none";
    enkelKrimEnTekst.textContent = `Du tæsjer ${enkelValgEn} kroner brur`;
    enkelCheckTo.style.display = "none";
    enkelKrimToTekst.style.display = "none";
    enkelCheckTre.style.display = "none";
    enkelKrimTreTekst.style.display = "none";
    enkelKnapp.style.display = "none";
    enkelKrimVt();
    setTimeout(() => {
        resetEnkel();
    }, 6000);
};

function enkelValgTo() {
    const enkelValgTo = Math.floor(Math.random() * (2000 - 1000)) + 1000;
    pengeCounter += enkelValgTo;
    pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
    enkelCheckEn.style.display = "none";
    enkelKrimEnTekst.style.display = "none";
    enkelCheckTo.style.display = "none";
    enkelKrimToTekst.textContent = `Du tæsjer ${enkelValgTo} kroner brur`;
    enkelCheckTre.style.display = "none";
    enkelKrimTreTekst.style.display = "none";
    enkelKnapp.style.display = "none";
    enkelKrimVt();
    setTimeout(() => {
        resetEnkel();
    }, 6000);
};

function enkelValgTre() {
    const enkelValgTre = Math.floor(Math.random() * (5000 - 2500)) + 2500;
    pengeCounter += enkelValgTre;
    pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
    enkelCheckEn.style.display = "none";
    enkelKrimEnTekst.style.display = "none";
    enkelCheckTo.style.display = "none";
    enkelKrimToTekst.style.display = "none";
    enkelCheckTre.style.display = "none";
    enkelKrimTreTekst.textContent = `Du tæsjer ${enkelValgTre} kroner brur.`;
    enkelKnapp.style.display = "none";
    enkelKrimVt();
    setTimeout(() => {
        resetEnkel();
    }, 6000);
};

function tungValgEn() {
    const kebabKiosk = ["Gran Kebab", "Dronningens Kebab", "Balkan Pizza & Kebab House", "New Beirut Kebab", "Bislett Kebab House", "Carmel Grill", "Ekte Istanbul Kebab", "Kebab Toppen", "Gazakjøkken"];
    const tungValgEn = Math.floor(Math.random() * (15000 - 10000)) + 10000;
    const kebabValg = Math.floor(Math.random() * kebabKiosk.length);
    pengeCounter += tungValgEn;
    pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
    tungCheckEn.style.display = "none";
    tungKrimEnTekst.textContent = `Du stjeler ${tungValgEn} kroner fra ${kebabKiosk[kebabValg]}.`;
    tungCheckTo.style.display = "none";
    tungKrimToTekst.style.display = "none";
    tungCheckTre.style.display = "none";
    tungKrimTreTekst.style.display = "none";
    tungKnapp.style.display = "none";
    tungKrimVt();
    setTimeout(() => {
        resetTung();
    }, 11000);
};

function tungValgTo() {
    const tungValgTo = Math.floor(Math.random() * (25000 - 20000)) + 20000;
    pengeCounter += tungValgTo;
    pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
    tungCheckEn.style.display = "none";
    tungKrimEnTekst.style.display = "none";
    tungCheckTo.style.display = "none";
    tungKrimToTekst.textContent = `Du stjeler ${tungValgTo} kroner fra Narvesen.`;
    tungKnapp.style.display = "none";
    tungCheckTre.style.display = "none";
    tungKrimTreTekst.style.display = "none";
    tungKrimVt();
    setTimeout(() => {
        resetTung();
    }, 11000);
};

function tungValgTre() {
    const roulette = Math.floor(Math.random() * 38);
    if(pengeCounter < 40000) {
        tungVtP.style.display = "flex";
        tungVtP.textContent = "Du har ikke nok penger";
        crimeCounter -= 1;
        krimCounter.textContent = `Antall kriminelle handlinger: ${crimeCounter}`;
    } else {
        if(roulette === 0) {
            pengeCounter += 1400000;
            pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
            tungCheckEn.style.display = "none";
            tungKrimEnTekst.style.display = "none";
            tungCheckTo.style.display = "none";
            tungKrimToTekst.display = "none";
            tungKnapp.style.display = "none";
            tungCheckTre.style.display = "none";
            tungKrimTreTekst.textContent = "Du vinner 1400000 kroner!";
            tungKrimVt();
            setTimeout(() => {
                resetTung();
            }, 11000);
        } else {
            pengeCounter -= 40000;
            pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
            tungCheckEn.style.display = "none";
            tungKrimEnTekst.style.display = "none";
            tungCheckTo.style.display = "none";
            tungKrimToTekst.display = "none";
            tungKnapp.style.display = "none";
            tungCheckTre.style.display = "none";
            tungKrimTreTekst.textContent = "Du taper 40000 kroner!";
            tungKrimVt();
            setTimeout(() => {
            resetTung();
            }, 11000);
        }
    }
}

enkelKnapp.addEventListener("click", doEnkelCrime);
enkelKnapp.addEventListener("click", updateCrimeCounter);
tungKnapp.addEventListener("click", updateCrimeCounter);
tungKnapp.addEventListener("click", doTungCrime);

function doEnkelCrime() {
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

function doTungCrime() {
    if(tungCheckEn.checked) {
        tungValgEn();
    }
    if(tungCheckTo.checked) {
        tungValgTo();
    }
    if(tungCheckTre.checked) {
        tungValgTre();
    }
};



function enkelKrimVt() {
    if(enkelCountdown) {
        clearInterval(enkelCountdown);
    }

    let enkelVt = 5;
    const enkelVtP = document.getElementById("enkelVtP");
    enkelVtP.style.display = "block";

    enkelVtP.textContent = `Du kan utføre enkel igjen om ${enkelVt} sekunder.`;

    enkelCountdown = setInterval(() => {
        enkelVt--;
        enkelVtP.textContent = `Du kan utføre enkel igjen om ${enkelVt} sekunder.`;
        if(enkelVt < 0) {
            clearInterval(enkelCountdown);
            enkelVtP.style.display = "none";
        }
    }, 1000);
}

function tungKrimVt() {
    if(tungCountdown) {
        clearInterval(tungCountdown);
    }
    
    let tungVt = 10;
    const tungVtP = document.getElementById("tungVtP");
    tungVtP.style.display = "block";

    tungVtP.textContent = `Du kan utføre tung igjen om ${tungVt} sekunder.`;

    tungCountdown = setInterval(() => {
        tungVt--;
        tungVtP.textContent = `Du kan utføre tung igjen om ${tungVt} sekunder.`;
        if(tungVt < 0) {
            clearInterval(tungCountdown);
            tungVtP.style.display = "none";
        }
    }, 1000);
}


function updateCrimeCounter() {
    // let updatedCrimeCounter = crimeCounter + 1;
    // let updatedCrimeCounter = Math.floor(crimeCounter + 1);
    crimeCounter += 1;
    krimCounter.textContent = `Antall kriminelle handlinger: ${crimeCounter}`;
}

function preLoadButtons() {
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
};

preLoadButtons();

function spawnPenger() {
    pengeCounter += 100000;
    pengeCounterP.textContent = `Penger: ${pengeCounter} kr`;
}

giPenger.addEventListener("click", spawnPenger);