let targetNumber = 0;
let attempts = 0;
const maxAttempts = 5;

const guessInput = document.getElementById("guess-value");
const guessBtn = document.getElementById("guess-btn");
const restartBtn = document.getElementById("restart-btn");
const attemptSpan = document.getElementById("attempt");
const resultDiv = document.getElementById("result");






function isNumeric(value) {
    return value.trim() !== "" && !isNaN(Number(value));
}


function initGame() {
    guessInput.value = "";
    guessBtn.style.display = "none";
    restartBtn.style.display = "block";
    attempts = 0;
    attemptSpan.textContent = attempts;
    resultDiv.textContent = "";
}




function startGame() {
    restartBtn.style.display = "none";
    guessBtn.style.display = "block";
    guessInput.value = "";
    guessInput.focus();

    // Random integer between 1 and 20
    targetNumber = Math.floor(Math.random() * 20) + 1;

    attempts = 0;
    attemptSpan.textContent = attempts;
    resultDiv.textContent = "";
}





function handleGuess() {
    const rawValue = guessInput.value;


    if (!isNumeric(rawValue)) {
        return;
    }

    const userGuess = Number(rawValue);
    attempts++;
    attemptSpan.textContent = attempts;

    if (userGuess === targetNumber) {
        resultDiv.textContent = "You WIN";
        guessBtn.style.display = "none";
        restartBtn.style.display = "block";
    } else if (attempts >= maxAttempts) {
        resultDiv.textContent = "You LOSE";
        guessBtn.style.display = "none";
        restartBtn.style.display = "block";
    } else if (userGuess > targetNumber) {
        resultDiv.textContent = userGuess + " is too high";
    } else {
        resultDiv.textContent = userGuess + " is too low";
    }


    guessInput.value = "0";
    guessInput.focus();
}

restartBtn.addEventListener("click", startGame);
guessBtn.addEventListener("click", handleGuess);

// Initialize on load
initGame();