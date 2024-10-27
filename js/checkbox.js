const checkbox = document.getElementById("checkbox");
let paragraph = document.getElementById("paragraph");

function changeParagraph() {
    paragraph.style.margin = "10px";
    paragraph.style.color = "#BDBDBD";
    paragraph.innerText = "Hei dette var litt kult";
}

function revertParagraph() {
    paragraph.style.display = "none";
}

// checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//         changeParagraph()
//     } else {
//         revertParagraph()
//     }
// })

function footerTest() {

}

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        body.style.background = "#fff";
    } else {
        body.style.background = "#000";
    }
})