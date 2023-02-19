let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random target number from 1-9
var generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Compare user guesses to computer guesses
function compareGuesses(humanNum, computerNum, target) {
    let computerGuess = Math.abs(target - computerNum);
    let humanGuess = Math.abs(target - humanNum);

    if (humanNum > 9 || humanNum < 0) {
        alert('Please enter a number between 1 to 9');
    }

    if (humanGuess <= computerGuess) {
        return true;
    } else {
        return false;
    }
}

// Update score
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

// Move onto next round
function advanceRound() {
    currentRoundNumber++;
}