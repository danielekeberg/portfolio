document.querySelector(".hover-target").addEventListener("mouseover", () => {
    const infoBox = document.querySelector("info-box");
    infoBox.textContent = "Dynamic content loaded!";
    infoBox.style.backgroundColor = "#007BFF";
});

document.querySelector(".hover-target").addEventListener("mouseleave", () => {
    const infoBox = document.querySelector("info-box");
    infoBox.style.backgroundColor = "#333";
});