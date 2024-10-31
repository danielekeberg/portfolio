const enkelCheckbox = document.querySelectorAll(".enkelCheckbox");
const tungCheckbox = document.querySelectorAll(".tungCheckbox");


function singleCheckboxBehaviour(checkboxes) {
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                checkboxes.forEach((cb) => {
                    if (cb !== checkbox) {
                        cb.checked = false;
                    }
                });
            }
        });
    });       
}

singleCheckboxBehaviour(enkelCheckbox);
singleCheckboxBehaviour(tungCheckbox);

const enkelEn = document.getElementById("enkelEn");
const enkelTo = document.getElementById("enkelTo");
const enkelTre = document.getElementById("enkelTre");
const tungEn = document.getElementById("tungEn");
const tungTo = document.getElementById("tungTo");

