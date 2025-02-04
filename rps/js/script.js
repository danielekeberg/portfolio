const compScore = document.getElementById('computer');
const userScore = document.getElementById('user');
const result = document.getElementById('result');
const userPick = document.getElementById('userChose');
const compPick = document.getElementById('computerChose');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let userScoreDisplay = 0;
let compScoreDisplay = 0;

function pickRock() {
    userPick.src = './assets/rock.svg';
    const userNumber = Math.floor(Math.random() * 3);
    if(userNumber === 0) {
        compPick.src = './assets/rock.svg';
        result.textContent = 'Draw!';
    } else if (userNumber === 1) {
        compPick.src = './assets/paper.svg';
        result.textContent = 'Computer has won!';
        compScoreDisplay ++;
    } else if (userNumber === 2) {
        compPick.src = './assets/scissors.svg';
        result.textContent = 'User has won!';
        userScoreDisplay ++;
    }
    userScore.textContent = `${userScoreDisplay}`;
    compScore.textContent = `${compScoreDisplay}`;
}
function pickPaper() {
    userPick.src = './assets/paper.svg';
    const userNumber = Math.floor(Math.random() * 3);
    if(userNumber === 0) {
        compPick.src = './assets/rock.svg';
        result.textContent = 'User has won!';
        userScoreDisplay ++;
    } else if (userNumber === 1) {
        compPick.src = './assets/paper.svg';
        result.textContent = 'Draw!';
    } else if (userNumber === 2) {
        compPick.src = './assets/scissors.svg';
        result.textContent = 'Computer has won!';
        compScoreDisplay ++;
    }
    userScore.textContent = `${userScoreDisplay}`;
    compScore.textContent = `${compScoreDisplay}`;
}
function pickScissors() {
    userPick.src = './assets/scissors.svg';
    const userNumber = Math.floor(Math.random() * 3);
    if(userNumber === 0) {
        compPick.src = './assets/rock.svg';
        result.textContent = 'Computer has won!';
        compScoreDisplay ++;
    } else if (userNumber === 1) {
        compPick.src = './assets/paper.svg';
        result.textContent = 'User has won!';
        userScoreDisplay ++;
    } else if (userNumber === 2) {
        compPick.src = './assets/scissors.svg';
        result.textContent = 'Draw!';
        
    }
    userScore.textContent = `${userScoreDisplay}`;
    compScore.textContent = `${compScoreDisplay}`;
}

rock.addEventListener('click', pickRock);
paper.addEventListener('click', pickPaper);
scissors.addEventListener('click', pickScissors);