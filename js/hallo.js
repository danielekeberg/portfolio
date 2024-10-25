let hallo = document.getElementById("hallo");
let halloTo = document.getElementById("halloTo");
let body = document.querySelector("body");
let navn = document.getElementById("name");
let about = document.getElementById("about");
let button = document.querySelector(".email");


function sayHallo() {
    mode.innerHTML = "Hej du, jeg har lige spist en skål cornflakes med appelsinjuice i stedet for mælk, og jeg tror mine tæer begynder at tale til mig... de siger, jeg skal købe en enhjørning næste gang jeg er i Netto. Måske er det tid til at omfavne kaos.";
    welcome.innerHTML = "uhh ohhh.....";
    body.style.background = "red";
    navn.innerHTML = "welp...";
    about.style.background = "blue";
    button.style.color = "red";
    button.style.background = "green";
    hallo.style.display = "none";
    halloTo.style.display = "block";
}

function sayHalloReturn() {
    mode.innerHTML = "This page is a sandbox where I experiment with JavaScript to learn, build, and implement new features. As I'm continuously developing and testing new ideas, you may encounter sections that are incomplete or in progress. I appreciate your patience and understanding as I refine my skills and enhance this project. Thanks for being part of my journey!";
    welcome.innerHTML = "Welcome to Version X of my Test Page";
    body.style.background = "#171717";
    navn.innerHTML = "Daniel Ekeberg";
    about.style.background = "#18181B";
    button.style.color = "#BDBDBD";
    button.style.background = "#171717";
    hallo.style.display = "none";
    halloTo.style.display = "block";
}

hallo.addEventListener("click", sayHallo);
halloTo.addEventListener("click", sayHalloReturn);