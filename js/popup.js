// const popup1 = document.querySelector("#popbtn");
// let poop = document.querySelector("#popbtn");

// function pop() {
//     popup.style.background = "red";
// }

// function poppis() {
//     const vetikke = poop;

//     const popUpTest = `
//         <div class="poppern">
//             <h1 style="background-color: green; color: darkred">HEI! :D</h1>
//             <h2 style="background-color: blue; color: red">Hva Skjer Kompis</h2>
//             <h3 style="color: red">Dette var helt rått!</h3>
//         </div>
//     `;

//     vetikke.innerHTML += popUpTest;
// }

const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const kesha = document.getElementById("kesha");
const keshabtn = document.getElementById("keshabtn");
const keshaBtnMob = document.getElementById("keshaBtnMob");
const byttPbMob = document.getElementById("byttPbMob");
const keshaBtnMobLeave = document.getElementById("keshaBtnMobLeave");
const byttPbMobReset = document.getElementById("byttPbMobReset");

function openPopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

function keshajumpscare() {
    kesha.style.display = "flex";
}

function keshaleave() {
    kesha.style.display = "none";
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
keshabtn.addEventListener("mouseover", keshajumpscare);
keshabtn.addEventListener("mouseleave", keshaleave);
keshaBtnMob.addEventListener("click", keshajumpscare);
keshaBtnMobLeave.addEventListener("click", keshaleave);
byttPbMob.addEventListener("click", byttBilde);
byttPbMobReset.addEventListener("click", defaultPb);


overlay.addEventListener("click", closePopup);

const pb = document.getElementById("kanskje");
const byttPb = document.getElementById("byttPb");


function byttBilde() {
    var image = document.getElementById("kanskje");
    image.src = "../src/imgz39qsje6b1.png";
}

function defaultPb() {
    var image = document.getElementById("kanskje");
    image.src = "https://i.ibb.co/xXZHPqJ/cfa4739f2a3ab3bf712b8843471c1758.jpg";
}

byttPb.addEventListener("mouseover", byttBilde);
byttPb.addEventListener("mouseleave", defaultPb);


