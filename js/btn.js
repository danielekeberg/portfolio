const btnClr = document.getElementById("btnColor");
const hexCheck = document.getElementById("hexCheck");
const hexLabel = document.getElementById("hexLabel");
const btnColor = document.getElementById("btnColorInput");
const btnTxtColor = document.getElementById("btnTxtColorInput");
const btnColorInputHex = document.getElementById("btnColorInputHex");
const btnTxtColorInputHex = document.getElementById("btnTxtColorInputHex");

function changeBtnClr() {
    const clrInput = document.getElementById("btnColorInput").value;
    const txtClrInput = document.getElementById("btnTxtColorInput").value;
    btnClr.style.background = `${clrInput}`;
    btnClr.style.color = `${txtClrInput}`;
}

function changeBtnClrHex() {
    const clrTxtInputHex = document.getElementById("btnTxtColorInputHex").value;
    const clrInputHex = document.getElementById("btnColorInputHex").value;
    btnClr.style.background = `#${clrInputHex}`;
    btnClr.style.color = `#${clrTxtInputHex}`;
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