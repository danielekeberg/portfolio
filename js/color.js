var changeColor = document.querySelector("#changeColor");
var invisible = document.querySelector("#invisible");

function change() {
    changeColor.style.background = "#388E3C";
    changeColor.style.color = "#fff";
    changeColor.innerHTML = "The color har been changed to green!";
    invisible.style.display = "block";
}

function revert() {
    changeColor.style.background = "#171717";
    changeColor.style.color = "#BDBDBD";
    changeColor.style.border = "1px solid #28282A";
    changeColor.innerHTML = "The color har been reverted!";
    invisible.style.display = "none";
}