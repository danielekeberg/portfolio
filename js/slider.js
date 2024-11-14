const imgSlider = document.getElementById("imgSlider");
const sliderDiv = document.getElementById("slider");
const next = document.getElementById("nextImg");
const randomImg = document.getElementById("randomImg");
const pbImage = document.getElementById("kanskje");
const submitBtn = document.getElementById("submitBtn");
const allImages = document.getElementById("allImages");
const urlBtn = document.getElementById("urlBtn");
const sbmtBtn = document.getElementById("sbmtBtn");
const submitImgNumber = document.getElementById("submitImgNumber");
const displaySelectedPicture = document.querySelector(".displayPicture");
const displaySlctImg = document.getElementById("displaySlctImg");
const displayH3 = document.getElementById("displayH3");
const displayError = document.getElementById("displayError");
const errorMsg = document.getElementById("errorMsg");
const imgNumberInput = document.getElementById("imgNumberInput");

let imageArray = [
            "https://i.pinimg.com/564x/62/f6/e2/62f6e2823d2d886eeb0f40ef640d856b.jpg",
            "https://i.pinimg.com/736x/f4/c6/32/f4c632c91e95f98746af4c00792fb960.jpg",
            "https://i.pinimg.com/564x/04/6b/ff/046bff70eb5e8a3a9d2c80e3bd607e83.jpg",
            "https://i.pinimg.com/564x/51/ff/8e/51ff8ed5a7124ce1b01ed6e4a4a5c686.jpg",
            "https://i.pinimg.com/564x/32/39/be/3239be2ae1d31d198cee93a8658f0c53.jpg",
            "https://i.pinimg.com/564x/78/48/dc/7848dc75e56893dc282fd9fe6dd80651.jpg",
            "https://i.pinimg.com/736x/37/d9/5b/37d95b589714c152ae7fd1a088dd0c63.jpg",
            "https://i.pinimg.com/736x/5e/49/bb/5e49bb8cc1b6c36002cddd3a2b536245.jpg",
            "https://i.pinimg.com/736x/c4/06/b5/c406b5856027f68ac5dd7fc378dd367e.jpg",
            "https://i.pinimg.com/564x/fa/01/a9/fa01a95e0a19a7398eae5ffc7ca5eb2c.jpg",
            "https://i.pinimg.com/564x/1b/93/f9/1b93f95d671fab2500dd242a7b6944af.jpg",
            "https://i.pinimg.com/564x/f7/bf/3b/f7bf3b501c0622a596a77193ef7296ce.jpg",
            "https://i.pinimg.com/564x/7d/01/9f/7d019f34bfee83cc6bfa7d4a2f4f4df8.jpg",
            "https://i.pinimg.com/564x/19/0c/94/190c940175aa52442fd74f3bd35519f1.jpg",
            "https://i.pinimg.com/564x/6e/05/eb/6e05ebce0023f4814aac82c82af41056.jpg",
            "https://i.pinimg.com/564x/c6/b5/26/c6b526a44328447cf86fba2b202d2e89.jpg",
            "https://i.pinimg.com/736x/82/bf/7c/82bf7ca9288d583bc0008c580fbc2225.jpg",
            "https://i.pinimg.com/564x/0f/76/1e/0f761e864e5b743c38b6faeaca18ceee.jpg",
            "https://i.pinimg.com/564x/e3/2d/85/e32d8551bde7c7db25162a2814c93b91.jpg",
            "https://i.pinimg.com/564x/71/f6/f8/71f6f84e9bdafc56031fe3f6894f90cb.jpg",
            "https://i.pinimg.com/564x/39/37/3b/39373bd66e002ad80ef99251b523362e.jpg",
            "https://i.pinimg.com/564x/f7/05/19/f705197fc1cec5d487033d2f8b45524a.jpg",
            "https://i.pinimg.com/564x/4b/61/5b/4b615ba5eba79ba7e45c4f0b9b15e1ae.jpg"
            ];

let imageSlot = 0;

let arrayLength = imageArray.length;

function nextImage() {
    imageSlot = (imageSlot + 1) % imageArray.length;
    imgSlider.src = imageArray[imageSlot];
    console.log(`Her vises bilde nummer: ${imageSlot + 1}`);
}

function randomImage() {
    const randomImageNumber = Math.floor(Math.random() * imageArray.length);
    imgSlider.src = imageArray[randomImageNumber];
    console.log(`Her vises bilde nummer: ${randomImageNumber + 1}`);
}

function randomPb() {
    const randomPbNumber = Math.floor(Math.random() * imageArray.length);
    pbImage.src = imageArray[randomPbNumber];
}

next.addEventListener("click", nextImage);
randomImg.addEventListener("click", randomImage);

randomPb();

function loadImages() {
    allImages.innerHTML = "";
    imageArray.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.style.width = "200px";
        img.style.height = "200px";
        img.style.margin = "10px";
        img.style.borderRadius = "4px";
        allImages.appendChild(img);
    });
}

loadImages();

function disableBtn() {
    submitBtn.disabled = true;
    submitBtn.textContent = `${arrayLength} images`;
}

disableBtn();

function inputPlaceholder() {
    const imgNumberInput = document.getElementById("imgNumberInput");
    imgNumberInput.placeholder = `1-${arrayLength}`;
    displaySlctImg.src = `${imageArray[0]}`;
}

inputPlaceholder();

function selectImg() {
    const selectImgInput = Number(document.getElementById("imgNumberInput").value);
        if(selectImgInput > 23 || selectImgInput < 1) {
            errorMsg.textContent = `Please select a number between 1-${arrayLength}`;
            displayError.style.display = "flex";
            imgNumberInput.style.color = "red";
        } else {
            displaySelectedPicture.innerHTML = `
                <img id="displaySlctImg" src="${imageArray[selectImgInput - 1]}">`;
                displayH3.textContent = `Currently Showing Image Number ${selectImgInput} / ${arrayLength}`;
                displayError.style.display = "none";
        }
}

submitImgNumber.addEventListener("click", selectImg);
imgNumberInput.addEventListener("input", () => {
    const inputLength = document.getElementById("imgNumberInput").value;
    if(inputLength > 23 || inputLength < 1) {
        imgNumberInput.style.color = "#cc5757";
    } else {
        imgNumberInput.style.color = "#333";
    }
});