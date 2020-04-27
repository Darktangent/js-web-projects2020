const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

// puzzleEl.textContent = game1.puzzle;
// guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
	const guess = String.fromCharCode(e.charCode);
	game1.makeGuess(guess);
	render();
});
const render = () => {
	puzzleEl.innerHTML = '';
	guessesEl.textContent = game1.statusMessage;
	// console.log(typeof game1.puzzle);
	game1.puzzle.split('').forEach((letter) => {
		const span = document.createElement('span');
		span.textContent = letter;
		puzzleEl.appendChild(span);
	});
};
const startGame = async () => {
	const puzzle = await getPuzzle('2');
	game1 = new Hangman(puzzle, 5);
	render();
};
startGame();
document.querySelector('#reset').addEventListener('click', (e) => {
	startGame();
});
// getPuzzle('2')
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((e) => {
// 		console.log(`Error: ${e}`);
// 	});
