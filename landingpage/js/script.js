const mainImage = document.getElementById('imageMain');
const firstImage = document.getElementById('imageOne');
const secondImage = document.getElementById('imageTwo');
const thirdImage = document.getElementById('imageThree');


function returnDefault() {
    mainImage.src = '../assets/main.png';
}

function firstMini() {
    mainImage.src = '../assets/1.png';
}
function secondMini() {
    mainImage.src = '../assets/2.png';
}
function thirdMini() {
    mainImage.src = '../assets/3.png';
}

returnDefault();

firstImage.addEventListener('mouseover', firstMini);
firstImage.addEventListener('mouseleave', returnDefault);

secondImage.addEventListener('mouseover', secondMini);
secondImage.addEventListener('mouseleave', returnDefault);

thirdImage.addEventListener('mouseover', thirdMini);
thirdImage.addEventListener('mouseleave', returnDefault);