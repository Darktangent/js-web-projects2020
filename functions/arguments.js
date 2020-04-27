// multiple args

let add = function (...args) {
	console.log(typeof args);

	return args.reduce((acc, curr) => {
		return acc + curr;
	});
};
console.log(add(10, 23, 90));
// default args
let getScoreText = function (name = 'anonymous', score = 0) {
	return `${name} has a total score of ${score}`;
};
const text = getScoreText('adam', 100);
console.log(text);
// coding
const getTip = function (total = 1, tipPercent = 20) {
	return total + (total * tipPercent) / 100;
};
const totalBill = getTip(120, 25);
console.log(totalBill);

// coding
let fahrenheitToCelcius = (temp) => {
	return (temp - 32) * (5 / 9);
};
let celcius = fahrenheitToCelcius(70);
console.log(celcius.toFixed(2));
// codes
let gradeCalc = (score = 0, possibleScore) => {
	if (typeof score === 'number' && typeof possibleScore === 'number') {
		let percent = (possibleScore * score) / 100;
		if (percent >= 90 && percent <= 100) {
			return `${score}/${possibleScore}=> You got a A (${percent})`;
		} else if (percent >= 80 && percent <= 89) {
			return `${score}/${possibleScore}=> You got a B (${percent})`;
		} else if (percent >= 70 && percent <= 79) {
			return `${score}/${possibleScore}=> You got a C (${percent})`;
		} else if (percent >= 60 && percent <= 69) {
			return `${score}/${possibleScore}=> You got a D (${percent})`;
		} else if (percent >= 0 && percent <= 59) {
			return `${score}/${possibleScore}=> You got a F (${percent})`;
		}
	} else {
		throw new Error('Please provide numbers only');
	}
};
try {
	const generateText = gradeCalc(77, 100);
	console.log(generateText);
} catch (e) {
	console.log(e.message);
}
