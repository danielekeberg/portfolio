const btnClr = document.getElementById("btnColor");

function changeBtnClr() {
    const clrInput = document.getElementById("btnColorInput").value;
    const txtClrInput = document.getElementById("btnTxtColorInput").value;
    btnClr.style.background = `${clrInput}`;
    btnClr.style.color = `${txtClrInput}`;
}

btnClr.addEventListener("click", changeBtnClr);