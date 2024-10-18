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

function openPopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

overlay.addEventListener("click", closePopup);