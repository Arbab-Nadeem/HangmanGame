const puzzleEl = document.getElementById('puzzle');
const remainingGuesses = document.getElementById('remaining-guesses');

let game;

window.addEventListener('keypress', (event) => {
	const guess = String.fromCharCode(event.charCode);
	game.makeGuess(guess);
	render();
});
const render = () => {
	puzzleEl.innerHTML = '';
	// 	puzzleEl.textContent = game.puzzle;
	game.puzzle.split('').forEach((letter) => {
		const letterEl = document.createElement('span');
		letterEl.textContent = letter;
		puzzleEl.appendChild(letterEl);
	});
	remainingGuesses.textContent = game.statusMessage;
};

const startGame = async () => {
	const puzzle = await getPuzzle('2');
	game = new Hangman(puzzle, 5);
	render();
};
document.getElementById('reset').addEventListener('click', startGame);

startGame();
// getPuzzle('2').then(
// 	(puzzle) => {
// 		console.log(puzzle);
// 	},
// 	(error) => {
// 		`Error: ${error}`;
// 	}
// );

// getPuzzle('2', (error, puzzle) => {
// 	if (error) {
// 		console.log(`Error:${error}`);
// 	} else {
// 		console.log(puzzle);
// 	}
// });

// getPuzzle('2')
// 	.then((puzzle) => {
// 		console.log(puzzle);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// fetch('https://puzzle.mead.io/puzzle?=$', {})
// 	.then((response) => {
// 		if (response.status === 200) {
// 			return response.json();
// 		} else {
// 			throw new Error('Error Occurred');
// 		}
// 	})
// 	.then((data) => {
// 		console.log(data.puzzle);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
