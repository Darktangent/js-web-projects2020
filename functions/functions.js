let greetUser = function (params) {
	console.log('Welcome ' + params);
};
greetUser('Andrew');

let numSquared = (num = 2) => {
	return num * num;
};
let result = numSquared(22);
console.log(result);
// coding
let fahrenheitToCelcius = (temp) => {
	return (temp - 32) * (5 / 9);
};
let celcius = fahrenheitToCelcius(70);
console.log(celcius.toFixed(2));
// undefined
let name = null;
name = 'Jen';
// console.log(name);
if (name === undefined) {
	console.log(`Name has no value`);
} else {
	console.log(`${name}`);
}
