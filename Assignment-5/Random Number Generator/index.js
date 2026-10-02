// Simple and easy-to-read Random Number Generator script
const KEY = 'rng_number';

const input = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const revealBtn = document.getElementById('revealBtn');
const message = document.getElementById('message');
const lastGuess = document.getElementById('lastGuess');
const storedNumber = document.getElementById('storedNumber');
const playAgain = document.getElementById('playAgain');

function randomNumber() {
	return Math.floor(Math.random() * 10) + 1;
}

function saveNumber(n) {
	localStorage.setItem(KEY, n);
}

function loadNumber() {
	const v = localStorage.getItem(KEY);
	return v ? Number(v) : null;
}

// Ensure there is a stored number
if (loadNumber() === null) {
	saveNumber(randomNumber());
}

checkBtn.addEventListener('click', function () {
	const guess = Number(input.value);
	if (!guess || guess < 1 || guess > 10) {
		message.textContent = 'Please enter a number between 1 and 10.';
		message.className = 'message fail';
		return;
	}

	const stored = loadNumber();
	lastGuess.textContent = 'Your guess: ' + guess;
	lastGuess.classList.remove('hidden');

	if (guess === stored) {
		message.textContent = 'Congratulations! You guessed correctly 🎉';
		message.className = 'message success';
		playAgain.classList.remove('hidden');
	} else {
		message.textContent = 'Better luck next time — try again!';
		message.className = 'message fail';
	}
});

revealBtn.addEventListener('click', function () {
	const stored = loadNumber();
	message.textContent = 'The stored number is ' + stored + '.';
	message.className = 'message';
	storedNumber.textContent = 'Stored number: ' + stored;
	storedNumber.classList.remove('hidden');
});

playAgain.addEventListener('click', function () {
	saveNumber(randomNumber());
	message.textContent = 'New number stored. Good luck!';
	message.className = 'message';
	lastGuess.classList.add('hidden');
	storedNumber.classList.add('hidden');
	playAgain.classList.add('hidden');
	input.value = '';
});

