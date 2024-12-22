const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 13, 52, 24, 33, 73, 55];
const names = ["Daniel", "Therese", "Hilde", "Håvard", "Romeo"]
const forEachDiv = document.createElement("div");

numbers.sort((a, b) => a - b);
names.sort((a, b) => a - b);

numbers.forEach(number => {
    forEachDiv.classList.add("forEachDivContainer");
    forEachDiv.innerHTML = `This is number ${number}`;
    document.getElementById("forEachContainer").appendChild(forEachDiv);
});

names.forEach(name => {
    forEachDiv.classList.add("forEachDivContainer");
    forEachDiv.innerHTML = `${name}`;
    document.getElementById("forEachContainer").appendChild(forEachDiv);
});
    