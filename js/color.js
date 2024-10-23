var changeColor = document.querySelector("#changeColor");
var invisible = document.querySelector("#invisible");
var invisibleTwo = document.querySelector("#invisibleText");
var versionC = document.querySelector("#version");
var changeColorTwo = document.querySelector("#changeColorTwo");
// var socials = document.querySelectorAll(".socialz"); //

function change() {
    changeColor.style.background = "#03396c";
    changeColor.style.color = "#fff";
    changeColor.innerHTML = "The color har been changed to blue!";
    invisible.style.display = "block";
    socials.forEach(link => {
        link.style.color = "pink";
    });
}

function revert() {
    changeColor.style.background = "#171717";
    changeColor.style.color = "#BDBDBD";
    changeColor.style.border = "1px solid #28282A";
    changeColor.innerHTML = "The color has been reverted!";
    invisible.style.display = "none";
    socials.forEach(link => {
        link.style.color = "#BDBDBD";
    })
}

function versionColor() {
    versionC.style.color = "pink";
    invisibleTwo.style.display = "block";
    changeColorTwo.innerHTML = "The color has been changed!"
}

function revertColor() {
    changeColorTwo.innerHTML = "The color has been reverted!"
    versionC.style.color = "#a8e794";
    invisibleTwo.style.display = "none";
}