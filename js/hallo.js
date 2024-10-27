let hallo = document.getElementById("hallo");
let halloTo = document.getElementById("halloTo");
let body = document.querySelector("body");
let navn = document.getElementById("name");
let about = document.getElementById("about");
let button = document.querySelector(".email");
let goNext = document.getElementById("goNextButtons");
let github = document.querySelector(".github");
let instagram = document.querySelector(".instagram");
let linkedIn = document.querySelector(".linkedIn");


function sayHallo() {
    mode.innerHTML = "Hej du, jeg har lige spist en skål cornflakes med appelsinjuice i stedet for mælk, og jeg tror mine tæer begynder at tale til mig... de siger, jeg skal købe en enhjørning næste gang jeg er i Netto. Måske er det tid til at omfavne kaos.";
    welcome.innerHTML = "uhh ohhh.....";
    body.style.background = "red";
    navn.innerHTML = "welp...";
    about.style.background = "blue";
    halloTo.style.color = "red";
    halloTo.style.background = "green";
    halloTo.style.display = "block";
    hallo.style.display = "none";
    goNext.style.display = "none";
}

function sayHalloReturn() {
    mode.innerHTML = "This page is a sandbox where I experiment with JavaScript to learn, build, and implement new features. As I'm continuously developing and testing new ideas, you may encounter sections that are incomplete or in progress. I appreciate your patience and understanding as I refine my skills and enhance this project. Thanks for being part of my journey!";
    welcome.innerHTML = "Welcome to Version X of my Test Page";
    body.style.background = "#171717";
    navn.innerHTML = "Daniel Ekeberg";
    about.style.background = "#18181B";
    button.style.color = "#BDBDBD";
    button.style.background = "#171717";
    hallo.style.display = "block";
    halloTo.style.display = "none";
    goNext.style.display = "flex";
}

function githubHover() {
    github.style.color = "pink";
}

function githubLeave() {
    github.style.color = "#BDBDBD";
}

function instagramHover() {
    instagram.style.color = "pink";
}

function instagramLeave() {
    instagram.style.color = "#BDBDBD";
}

function linkedInHover() {
    linkedIn.style.color = "pink";
}

function linkedInLeave() {
    linkedIn.style.color = "#BDBDBD";
}
function portfolioHover() {
    portfolioFooter.style.color = "pink";
}

function portfolioLeave() {
    portfolioFooter.style.color = "#BDBDBD";
}

hallo.addEventListener("click", sayHallo);
halloTo.addEventListener("click", sayHalloReturn);

// github.addEventListener("mouseover", githubHover);
// github.addEventListener("mouseleave", githubLeave);
// instagram.addEventListener("mouseover", instagramHover);
// instagram.addEventListener("mouseleave", instagramLeave);
// linkedIn.addEventListener("mouseover", linkedInHover);
// linkedIn.addEventListener("mouseleave", linkedInLeave);
// portfolioFooter.addEventListener("mouseover", portfolioHover);
// portfolioFooter.addEventListener("mouseleave", portfolioLeave);
