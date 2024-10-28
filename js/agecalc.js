const ageDisplay = document.getElementById("calculatedAge");
const ageButton = document.getElementById("ageButton");
const today = new Date();
const currentYear = today.getFullYear();

function age() {
    const ageInput = document.getElementById("age").value;
    let ageCalc = currentYear - ageInput;

    ageDisplay.innerText = ageCalc;
    if(ageInput >= currentYear) {
        ageDisplay.innerText = "Please enter a valid year";
    }
};

ageButton.addEventListener("click", age);