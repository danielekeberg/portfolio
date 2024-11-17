const btnClr = document.getElementById("btnColor");
const hexCheck = document.getElementById("hexCheck");
const hexLabel = document.getElementById("hexLabel");
const btnColor = document.getElementById("btnColorInput");
const btnTxtColor = document.getElementById("btnTxtColorInput");
const btnColorInputHex = document.getElementById("btnColorInputHex");
const btnTxtColorInputHex = document.getElementById("btnTxtColorInputHex");
const dropdownBtn = document.getElementById("dropdown-button");

function changeBtnClr() {
    const clrInput = document.getElementById("btnColorInput").value;
    const txtClrInput = document.getElementById("btnTxtColorInput").value;
    btnClr.style.background = `${clrInput}`;
    btnClr.style.color = `${txtClrInput}`;
}

function changeBtnClrHex() {
    const clrTxtInputHex = document.getElementById("btnTxtColorInputHex").value;
    const clrInputHex = document.getElementById("btnColorInputHex").value;
    btnClr.style.background = `${clrInputHex}`;
    btnClr.style.color = `${clrTxtInputHex}`;
}

btnClr.addEventListener("click", changeBtnClr);
btnClr.addEventListener("click", changeBtnClrHex);
hexCheck.addEventListener("change", swapHex);

function swapHex() {
    if(hexCheck.checked) {
        btnColor.style.display = "none";
        btnTxtColor.style.display = "none";
        btnColorInputHex.style.display = "flex";
        btnTxtColorInputHex.style.display = "flex";
    } else {
        btnColorInputHex.style.display = "none";
        btnTxtColorInputHex.style.display = "none";
        btnColor.style.display = "flex";
        btnTxtColor.style.display = "flex";
    }
}

function loadInput() {
    btnColorInputHex.style.display = "none";
    btnTxtColorInputHex.style.display = "none";
    btnColor.style.display = "flex";
    btnTxtColor.style.display = "flex";
}

loadInput();

function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

dropdownBtn.addEventListener("click", toggleDropdown)

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const dropH3 = document.getElementById("dropH3");
const link1reset = document.getElementById("link1reset");

// function dropdownOne() {
//     dropH3.textContent = "Link1";
// }

// function dropdownTwo() {
//     dropH3.textContent = "Link2";
// }

// function dropdownThree() {
//     dropH3.textContent = "Link3";
// }

// link1.addEventListener("click", dropdownOne);
// link2.addEventListener("click", dropdownTwo);
// link3.addEventListener("click", dropdownThree);

const dropdownImg = document.getElementById("dropdownImg");

let colorArray = [
    "red",
    "blue",
    "green",
    "purple",
    "pink",
    "lightblue",
    "white",
    "orange",
    "yellow",
    "#56BBC8",
    "#d1bdc1",
    "#f4d1c4",
    "#f8e4d6",
    "#347e8f",
    "#a3a1a3",
    "#870038",
    "#d74893"
];
let colorIndex = 10;
let imageIndex = 10;

function dropImg() {
    const randomDropImg = Math.floor(Math.random() * arrayLength);
    dropdownImg.style.display = "block";
    dropdownImg.src = `${imageArray[randomDropImg]}`;
    setTimeout(() => {
        dropdownImg.style.display = "none";
    }, 3000);
}

function dropdownH3() {
    // const randomDropColor1 = Math.floor(Math.random() * colorArray.length); 
    // const randomDropColor2 = Math.floor(Math.random() * colorArray.length); 
    // const randomDropColor3 = Math.floor(Math.random() * colorArray.length); 
    // const randomDropColor4 = Math.floor(Math.random() * colorArray.length); 
    // const randomDropColor5 = Math.floor(Math.random() * colorArray.length); 
    dropH3.style.color = `${colorArray[colorIndex]}`;
    dropdownBtn.textContent = `${colorIndex}`;
    dropdownImg.style.display = "block";
    dropdownImg.src = `${imageArray[imageIndex]}`;
    setTimeout(() => {
        colorIndex -= 1;
        imageIndex -= 1;
        dropdownImg.src = `${imageArray[imageIndex]}`;
        dropH3.style.color = `${colorArray[colorIndex]}`;
        dropdownBtn.textContent = `${colorIndex}`;
        setTimeout(() => {
            colorIndex -= 1;
            imageIndex -= 1;
            dropdownImg.src = `${imageArray[imageIndex]}`;
            dropH3.style.color = `${colorArray[colorIndex]}`;
            dropdownBtn.textContent = `${colorIndex}`;
            setTimeout(() => {
                colorIndex -= 1;
                imageIndex -= 1;
                dropdownImg.src = `${imageArray[imageIndex]}`;
                dropH3.style.color = `${colorArray[colorIndex]}`;
                dropdownBtn.textContent = `${colorIndex}`;
                setTimeout(() => {
                    colorIndex -= 1;
                    imageIndex -= 1;
                    dropdownImg.src = `${imageArray[imageIndex]}`;
                    dropH3.style.color = `${colorArray[colorIndex]}`;
                    dropdownBtn.textContent = `${colorIndex}`;
                    setTimeout(() => {
                        colorIndex -= 1;
                        imageIndex -= 1;
                        dropdownImg.src = `${imageArray[imageIndex]}`;
                        dropH3.style.color = `${colorArray[colorIndex]}`;
                        dropdownBtn.textContent = `${colorIndex}`;
                        setTimeout(() => {
                            colorIndex -= 1;
                            imageIndex -= 1;
                            dropdownImg.src = `${imageArray[imageIndex]}`;
                            dropH3.style.color = `${colorArray[colorIndex]}`;
                            dropdownBtn.textContent = `${colorIndex}`;
                            setTimeout(() => {
                                colorIndex -= 1;
                                imageIndex -= 1;
                                dropdownImg.src = `${imageArray[imageIndex]}`;
                                dropH3.style.color = `${colorArray[colorIndex]}`;
                                dropdownBtn.textContent = `${colorIndex}`;
                                setTimeout(() => {
                                    colorIndex -= 1;
                                    imageIndex -= 1;
                                    dropdownImg.src = `${imageArray[imageIndex]}`;
                                    dropH3.style.color = `${colorArray[colorIndex]}`;
                                    dropdownBtn.textContent = `${colorIndex}`;
                                    setTimeout(() => {
                                        colorIndex -= 1;
                                        imageIndex -= 1;
                                        dropdownImg.src = `${imageArray[imageIndex]}`;
                                        dropH3.style.color = `${colorArray[colorIndex]}`;
                                        dropdownBtn.textContent = `${colorIndex}`;
                                        colorIndex = 10;
                                        setTimeout(() => {
                                            dropdownBtn.textContent = `Dropdown`;
                                            dropH3.style.color = "#BDBDBD";
                                            dropdownImg.style.display = "none";
                                        }, 1000)
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function dropRedirect() {
    dropH3.style.color = "green";
    dropH3.textContent = "Redirecting to Login page!";
    setTimeout(() => {
        window.location.href = "../login/";
    }, 1000);
}

link1.addEventListener("click", dropImg);
link2.addEventListener("click", dropdownH3);
link3.addEventListener("click", dropRedirect);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3);
}