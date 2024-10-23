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
let version = document.querySelector('.version');
let socials = document.querySelectorAll('.socialz');

function lightMode() {
    body.style.background = "#fff";
    about.style.background = "#c7c7c7";
    welcome.style.color = "#171717";
    info.style.color = "#171717";
    name.style.color = "#171717";
    light.style.display = "none";
    dark.style.display = "block";
    nav.style.background = "#c7c7c7";
    links.style.color = "#171717";
    contact.style.color = "#171717";
    logoLight.style.background = "c7c7c7";
    socials.style.color = "#171717";
}

function darkMode() {
    body.style.background = "#171717";
    about.style.background = "#18181B";
    welcome.style.color = "#BDBDBD";
    info.style.color = "#BDBDBD";
    name.style.color = "#BDBDBD";
    light.style.display = "block";
    dark.style.display = "none";
    nav.style.background = "#18181B";
    links.style.color = "#BDBDBD";
    contact.style.color = "#BDBDBD";
    logoLight.style.background = "c7c7c7";
}

light.addEventListener("click", lightMode);
dark.addEventListener("click", darkMode);