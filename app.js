function generateSecretNumber() {
    return Math.floor(Math.random() * 9) + 1
}
let secretNumber = generateSecretNumber()
let guessCounter = 0

const choicesElems = document.querySelectorAll('.choices button');
const messageElem = document.querySelector('.message');
const playAgainBtn = document.querySelector('.play-again-btn');
const guessCounterElem = document.querySelector('.guess-counter');

for (let elem of choicesElems) {
    elem.addEventListener('click', handleGuess)
}

function handleGuess(event) {
    const elem = event.target;
    const userGuess = Number(elem.textContent);

    elem.disabled = true

    if (userGuess === secretNumber) {
        messageElem.textContent = `You got it!`;
        playAgainBtn.style.display = 'initial';
    } else {
        messageElem.textContent = `wrong. the number is not ${userGuess}`;
    
    }
    guessCounter++;
    guessCounterElem.textContent = guessCounter;
}

playAgainBtn.addEventListener('click', handleReset)
function handleReset() {
    playAgainBtn.style.display = 'none';
    guessCounter = 0
    guessCounterElem.textContent = guessCounter
    messageElem.textContent = ``
    for (let elem of choicesElems) {
        elem.disabled = false
    }
    secretNumber = generateSecretNumber()
}

