const generateButton = document.getElementById("generateButton");
const passwordDisplay = document.getElementById("generatedPassword");

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!#%&/()=?,+-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0) {
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0) {
        return `(At least 1 set of characters needs to be selected)`;
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
};

const passwordLength = 12;
let includeLowercase = true;
let includeUppercase = true;
let includeNumbers = false;
let includeSymbols = false;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

passwordDisplay.innerText = `${password}`;

function updateOptions() {
    includeLowercase = document.getElementById("lowercase").checked;
    includeUppercase = document.getElementById("uppercase").checked;
    includeNumbers = document.getElementById("number").checked;
    includeSymbols = document.getElementById("symbol").checked;
};

function displayNewPassword() {
    updateOptions();
    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.innerText = password;
}

document.getElementById("lowercase").addEventListener("change", updateOptions);
document.getElementById("uppercase").addEventListener("change", updateOptions);
document.getElementById("number").addEventListener("change", updateOptions);
document.getElementById("symbol").addEventListener("change", updateOptions);
generateButton.addEventListener("click", displayNewPassword);