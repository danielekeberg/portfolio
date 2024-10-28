const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    const textLength = textInput.value.length;
    charCount.textContent = textLength + " / 25";
    if(textLength > 24) {
        charCount.style.color = "#ad5151";
    } else {
        charCount.style.color = "#4d4d4d";
    }
});