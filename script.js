// script.js
const secretNumber = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 3;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (userGuess === secretNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < secretNumber) {
        document.getElementById('message').textContent = 'Too low! Try a higher number.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try a lower number.';
    }

    remainingGuesses--;
    if (remainingGuesses === 0) {
        document.getElementById('message').textContent = `Game over! The secret number was ${secretNumber}.`;
        document.getElementById('userGuess').disabled = true;
    }
}
