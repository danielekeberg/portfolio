const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 13, 52, 24, 33, 73, 55];

numbers.sort((a, b) => a - b);

numbers.forEach(number => {
    const forEachDiv = document.createElement("div");
    forEachDiv.classList.add("forEachDivContainer");
    forEachDiv.innerHTML = `This is number ${number}`;
    document.getElementById("forEachContainer").appendChild(forEachDiv);
});
    