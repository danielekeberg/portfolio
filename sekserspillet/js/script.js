let currentPenger = 1000000000;

export function getCurrentPenger() {
    return currentPenger;
}

export function setCurrentPenger(newAmount) {
    currentPenger = newAmount;
    updatePenger();
}

export function updatePenger() {
    const formatedPenger = currentPenger.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    document.getElementById('penger').textContent = `${formatedPenger} kr`
}

updatePenger();
setInterval(updatePenger, 60000);


function sekserSpillet() {
    const inputValue = document.getElementById('sekserInput').value;

    const double = inputValue * 2;
    const triple = inputValue * 3;
    const tenx = inputValue * 10;
    const maxWin = inputValue * 31;
    const tax = inputValue * 0.05;
    let antallSeksere = 0;

    document.getElementById('resultDisplay').style.opacity = '0';

    if (inputValue < 1000) {
        document.getElementById('resultDisplay').style.backgroundColor = 'red';
        document.getElementById('result').textContent = 'Ugyldig beløp. Du må satse minst 1000 kroner.';
        return;
    }

    if (isNaN(inputValue)) {
        document.getElementById('resultDisplay').style.backgroundColor = 'red';
        document.getElementById('result').textContent = 'Ugyldig beløp. Du må satse minst 1000 kroner.';
        return;
    }

    if (inputValue > 90000000) {
        document.getElementById('resultDisplay').style.backgroundColor = 'red';
        document.getElementById('result').textContent = 'For høyt beløp. Maxbet på dette kasinoet er 90 000 000.';
        return;
    }

    if (inputValue > currentPenger) {
        document.getElementById('resultDisplay').style.backgroundColor = 'red';
        document.getElementById('result').textContent = 'Du har ikke så mye penger.';
        return;
    }

    setTimeout(() => {
        const dice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('first').src = `../src/dice-six-faces-${dice}.png`;
        if(dice == 6) {
            antallSeksere ++
        }
        setTimeout(() => {
            const dice = Math.floor(Math.random() * 6) + 1;
            document.getElementById('second').src = `../src/dice-six-faces-${dice}.png`;
            if(dice == 6) {
                antallSeksere ++
            }
            setTimeout(() => {
                const dice = Math.floor(Math.random() * 6) + 1;
                document.getElementById('third').src = `../src/dice-six-faces-${dice}.png`;
                if(dice == 6) {
                    antallSeksere ++
                }
                setTimeout(() => {
                    const dice = Math.floor(Math.random() * 6) + 1;
                    document.getElementById('fourth').src = `../src/dice-six-faces-${dice}.png`;
                    if(dice == 6) {
                        antallSeksere ++
                    }
                    setTimeout(() => {
                        const dice = Math.floor(Math.random() * 6) + 1;
                        document.getElementById('fifth').src = `../src/dice-six-faces-${dice}.png`;
                        if(dice == 6) {
                            antallSeksere ++
                        }
                        setTimeout(() => {
                            const dice = Math.floor(Math.random() * 6) + 1;
                            document.getElementById('sixth').src = `../src/dice-six-faces-${dice}.png`;
                            if(dice == 6) {
                                antallSeksere ++
                            }
                            setTimeout(() => {
                                const dice = Math.floor(Math.random() * 6) + 1;
                                document.getElementById('seventh').src = `../src/dice-six-faces-${dice}.png`;
                                if(dice == 6) {
                                    antallSeksere ++
                                }
                                setTimeout(() => {
                                    const dice = Math.floor(Math.random() * 6) + 1;
                                    document.getElementById('eighth').src = `../src/dice-six-faces-${dice}.png`;
                                    if(dice == 6) {
                                        antallSeksere ++
                                    }
                                    setTimeout(() => {
                                        const dice = Math.floor(Math.random() * 6) + 1;
                                        document.getElementById('ninth').src = `../src/dice-six-faces-${dice}.png`;
                                        if(dice == 6) {
                                            antallSeksere ++
                                        }
                                        setTimeout(() => {
                                            const dice = Math.floor(Math.random() * 6) + 1;
                                            document.getElementById('tenth').src = `../src/dice-six-faces-${dice}.png`;
                                            if(dice == 6) {
                                                antallSeksere ++
                                            }
                                            setTimeout(() => {
                                                if(antallSeksere == 0) {
                                                    document.getElementById('result').innerHTML = `<p>Du fikk ${antallSeksere} seksere og vinner ${double}</p>`
                                                    document.getElementById('resultDisplay').style.backgroundColor = "green";
                                                    currentPenger += double;
                                                    currentPenger -= tax;
                                                    updatePenger();
                                                }
                                                if(antallSeksere == 1) {
                                                    document.getElementById('result').innerHTML = `<p>Du fikk ${antallSeksere} sekser og vinner ingenting</p>`
                                                    document.getElementById('resultDisplay').style.backgroundColor = "#181818";
                                                    currentPenger -= inputValue;
                                                    updatePenger();
                                                }
                                                if(antallSeksere == 2) {
                                                    document.getElementById('result').innerHTML = `<p>Du fikk ${antallSeksere} seksere og vinner ingenting</p>`
                                                    document.getElementById('resultDisplay').style.backgroundColor = "#181818";
                                                    currentPenger -= inputValue;
                                                    updatePenger();
                                                }
                                                if(antallSeksere == 3) {
                                                    document.getElementById('result').innerHTML = `<p>Du fikk ${antallSeksere} seksere og vinner ${double}</p>`
                                                    document.getElementById('resultDisplay').style.backgroundColor = "green";
                                                    currentPenger += double;
                                                    currentPenger -= tax;
                                                    updatePenger();
                                                }
                                                if(antallSeksere == 4) {
                                                    document.getElementById('result').innerHTML = `<p>Du fikk ${antallSeksere} seksere og vinner ${triple}</p>`
                                                    document.getElementById('resultDisplay').style.backgroundColor = "green";
                                                    currentPenger += triple;
                                                    currentPenger -= tax;
                                                    updatePenger();
                                                }
                                                if(antallSeksere == 5) {
                                                    document.getElementById('result').innerHTML = `<p>Du fikk ${antallSeksere} seksere og vinner ${tenx}</p>`
                                                    document.getElementById('resultDisplay').style.backgroundColor = "green";
                                                    currentPenger += tenx;
                                                    currentPenger -= tax;
                                                    updatePenger();
                                                }
                                                if(antallSeksere >= 6) {
                                                    document.getElementById('result').innerHTML = `<p>Du fikk ${antallSeksere} seksere og vinner ${maxWin}</p>`
                                                    document.getElementById('resultDisplay').style.backgroundColor = "green";
                                                    currentPenger += maxWin;
                                                    currentPenger -= tax;
                                                    updatePenger();
                                                }
                                                document.getElementById('resultDisplay').style.opacity = '1';
                                                console.log(tax);
                                            }, 50)
                                        }, 50)
                                    }, 50)
                                }, 50)
                            }, 50)
                        }, 50)
                    }, 50)
                }, 50)
            }, 50)
        }, 50)
    }, 0)
}

document.getElementById('sekserBtn').addEventListener('click', sekserSpillet);
// document.getElementById('sekserBtn').addEventListener('click', updatePenger);