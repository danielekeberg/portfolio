let light = document.getElementById('lightMode');
let dark = document.getElementById('darkMode');
let body = document.querySelector('body');
let about = document.getElementById('about');
let welcome = document.getElementById('welcome');
let info = document.getElementById('mode');
let name = document.getElementById('name');
let logoLight = document.getElementById('logoLight');
let nav = document.getElementById('nav');
let links = document.querySelector('.navLinks');
let contact = document.querySelector('.navLinksContact');
let footer = document.querySelector('footer');
let versionFooter = document.querySelector('.version');
let socialsFooter = document.querySelector('.socials');
let portfolioFooter = document.getElementById("portfolioFooter");
let github = document.querySelector(".github");
let instagram = document.querySelector(".instagram");
let linkedIn = document.querySelector(".linkedIn");
let right = document.querySelector(".right");
let online = document.querySelector(".online");

// let darkMode = parseInt(localStorage.getItem("darkMode")) || true;

function lightMode() {
    darkMode = false;
    localStorage.setItem("darkMode", darkMode);
    body.style.background = "#fff";
    about.style.background = "#c7c7c7";
    welcome.style.color = "#171717";
    info.style.color = "#171717";
    name.style.color = "#171717";
    light.style.display = "none";
    dark.style.display = "block";
    dark.textContent = `Darkmode: ${darkMode}`;
    nav.style.background = "#c7c7c7";
    links.style.color = "#171717";
    contact.style.color = "#171717";
    logoLight.style.background = "#c7c7c7";
    footer.style.background = "#c7c7c7";
    socialsFooter.style.color = "#171717";
    versionFooter.style.color = "#171717";
    portfolioFooter.style.color = "#171717";
    versionC.style.color = "#a8e794";
    github.style.color = "#171717";
    instagram.style.color = "#171717";
    linkedIn.style.color = "#171717";
    online.style.background = "#c7c7c7";
}

function darkMode() {
    darkMode = true;
    localStorage.setItem("darkMode", darkMode);
    body.style.background = "#171717";
    about.style.background = "#18181B";
    welcome.style.color = "#BDBDBD";
    info.style.color = "#BDBDBD";
    name.style.color = "#BDBDBD";
    light.style.display = "block";
    light.textContent = `Darkmode: ${darkMode}`;
    dark.style.display = "none";
    nav.style.background = "#18181B";
    links.style.color = "#BDBDBD";
    contact.style.color = "#BDBDBD";
    logoLight.style.background = "#18181B";
    footer.style.background = "#18181B";
    versionFooter.style.color = "#BDBDBD";
    portfolioFooter.style.color = "#BDBDBD";
    versionC.style.color = "#FFFDD0";
    github.style.color = "#BDBDBD";
    instagram.style.color = "#BDBDBD";
    linkedIn.style.color = "#BDBDBD";
    online.style.background = "#18181B";
}

// function preloadDarkmodeStatus() {
//     if(darkMode = true) {
//         light.textContent = `Darkmode: ${darkMode}`;
//     } else {
//         dark.textContent = `Darkmode: ${darkMode}`;
//     }
// }

// preloadDarkmodeStatus();

light.addEventListener("click", lightMode);
dark.addEventListener("click", darkMode);

