class Hangman {
	constructor(word, remainingGuesses) {
		this.word = word.toLowerCase().split('');
		this.remainingGuesses = remainingGuesses;
		this.guessedLetters = [];
		this.status = 'playing';
	}
	get puzzle() {
		let puzzle = '';
		this.word.forEach((letter) => {
			if (this.guessedLetters.includes(letter) || letter === ' ') {
				puzzle += letter;
			} else {
				puzzle += '*';
			}
		});
		return puzzle;
	}
	calcStatus() {
		const finished = this.word.every(
			(letter) =>
				this.guessedLetters.includes(letter) || letter === ' '
		);
		if (this.remainingGuesses == 0) {
			this.status = 'failed';
		} else if (finished) {
			this.status = 'finished';
		} else {
			this.status = 'playing';
		}
	}
	makeGuess(guess) {
		const isUnique = !this.guessedLetters.includes(guess);
		const isBad = !this.word.includes(guess);
		if (this.status !== 'playing') {
			return;
		}
		if (isUnique) {
			this.guessedLetters.push(guess);
		}
		if (isUnique && isBad) {
			this.remainingGuesses--;
		}
		game.calcStatus();
	}
	get statusMessage() {
		if (this.status === 'playing') {
			return `Remaining Guesses: ${this.remainingGuesses}`;
		} else if (this.status === 'failed') {
			return ` Nice try the word was "${this.word.join('')}"`;
		} else {
			return 'Great job you solved the puzzle';
		}
	}
}

// const Hangman = function (word, remainingGuesses) {
// 	this.status = 'playing';
// 	this.word = word.toLowerCase().split('');
// 	this.remainingGuesses = remainingGuesses;
// 	this.guessedLetters = [];
// };

// Hangman.prototype.calcStatus = function () {
// let finished = true;
// this.word.forEach((letter) => {
// 	if (this.guessedLetters.includes(letter)) {
// 	} else {
// 		finished = false;
// 	}
// });
// const unGuessedLetters = this.word.filter((letter) => {
// 	return !this.guessedLetters.includes(letter);
// });
// const finished = unGuessedLetters.length === 0;
// 	const finished = this.word.every((letter) =>
// 		this.guessedLetters.includes(letter)
// 	);
// 	if (this.remainingGuesses === 0) {
// 		this.status = 'failed';
// 	} else if (finished) {
// 		this.status = 'finished';
// 	} else {
// 		this.status = 'playing';
// 	}
// };
// Hangman.prototype.getPuzzle = function () {
// 	let puzzle = '';

// 	this.word.forEach((letter) => {
// 		if (this.guessedLetters.includes(letter) || letter === ' ') {
// 			puzzle += letter;
// 		} else {
// 			puzzle += '*';
// 		}
// 	});
// 	return puzzle;
// };
// Hangman.prototype.makeGuess = function (guess) {
// 	const isUnique = !this.guessedLetters.includes(guess);
// 	const isBad = !this.word.includes(guess);
// 	if (this.status !== 'playing') {
// 		return;
// 	}
// 	if (isUnique) {
// 		this.guessedLetters.push(guess);
// 	}
// 	if (isUnique && isBad) {
// 		this.remainingGuesses--;
// 	}
// 	game2.calcStatus();
// };
// Hangman.prototype.getStatusMessage = function () {
// 	if (this.status === 'playing') {
// 		return `Guesses Left: ${this.remainingGuesses}`;
// 	} else if (this.status === 'failed') {
// 		return `Nice try! the word was "${this.word.join('')}"`;
// 	} else {
// 		return 'Nice job, you succeeded!';
// 	}
// };

// const puzzle = document.getElementById('puzzle');
// const remainingGuesses = document.getElementById('remaining-guesses');

//  const game1 = new Hangman('cat', 1);

// const game2 = new Hangman('cat', 2);

// puzzle.textContent = game2.getPuzzle();
// remainingGuesses.textContent = game2.getStatusMessage();

// window.addEventListener('keypress', function (event) {
// 	const guess = String.fromCharCode(event.charCode);

// 	game2.makeGuess(guess);

// 	puzzle.textContent = game2.getPuzzle();
// 	remainingGuesses.textContent = game2.getStatusMessage();
// });
