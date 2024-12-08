const hoverBox1 = document.getElementById("hoverBox1");
const hoverBox2 = document.getElementById("hoverBox2");
const hoverEffekt1 = document.getElementById("hoverEffekt1");
const hoverEffekt2 = document.getElementById("hoverEffekt2");

function hoverOne() {
    hoverEffekt1.style.opacity = "1";
}

function unhoverOne() {
    hoverEffekt1.style.opacity = "0";
}
function hoverTwo() {
    hoverEffekt2.style.opacity = "1";
}

function unhoverTwo() {
    hoverEffekt2.style.opacity = "0";
}

hoverBox1.addEventListener("mouseover", hoverOne);
hoverBox1.addEventListener("mouseleave", unhoverOne);
hoverBox2.addEventListener("mouseover", hoverTwo);
hoverBox2.addEventListener("mouseleave", unhoverTwo);