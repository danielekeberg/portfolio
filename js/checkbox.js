const checkbox = document.getElementById("checkbox");
let paragraph = document.getElementById("paragraph");


// Badge Checkbox
const flammeBadge = document.getElementById("flammeBadge");
const eliteBadge = document.getElementById("eliteBadge");
const drapBadge = document.getElementById("drapBadge");
const tuttiBadge = document.getElementById("tuttiBadge");
const redDrapBadge = document.getElementById("redDrapBadge");

// Badge Img
const flamme = document.getElementById("flamme");
const eliten = document.getElementById("eliten");
const drap = document.getElementById("drap");
const tutti = document.getElementById("tutti");
const draparen = document.getElementById("draparen");

function changeParagraph() {
    paragraph.style.margin = "10px";
    paragraph.style.color = "#BDBDBD";
    paragraph.innerText = "Hei dette var litt kult";
}

function revertParagraph() {
    paragraph.style.display = "none";
}

// checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//         changeParagraph()
//     } else {
//         revertParagraph()
//     }
// })

function footerTest() {

}

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        body.style.background = "#fff";
    } else {
        body.style.background = "#000";
    }
})

flammeBadge.addEventListener("change", () => {
    if (flammeBadge.checked) {
        flamme.style.display = "inline-block";
    } else {
        flamme.style.display = "none";
    }
});

eliteBadge.addEventListener("change", () => {
    if (eliteBadge.checked) {
        eliten.style.display = "inline-block";
    } else {
        eliten.style.display = "none";
    }
});

drapBadge.addEventListener("change", () => {
    if (drapBadge.checked) {
        drap.style.display = "inline-block";
    } else {
        drap.style.display = "none";
    }
});

tuttiBadge.addEventListener("change", () => {
    if (tuttiBadge.checked) {
        tutti.style.display = "inline-block";
    } else {
        tutti.style.display = "none";
    }
});

// function testerRedBadge() {
//     redDrapBadge.addEventListener("change", () => {
//         if (redDrapBadge.checked) {
//             draparen.style.display = "inline-block";
//         } else {
//             draparen.style.display = "none";
//         }
//     })
// };

// redDrapBadge.addEventListener("change", () => {
//     if (redDrapBadge.checked) {
//         draparen.style.display = "inline-block";
//     } else {
//         draparen.style.display = "none";
//     }
// });