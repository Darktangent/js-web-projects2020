const add = () => {
	return arguments[0] + arguments[1];
};
console.log(add(1, 2, 3, 4, 58));

function car(color) {
	this.color = color;
}
car.prototype.getSummary = function () {
	return `The car is ${this.color}`;
};
const myCar = new car('purple');
console.log(myCar.getSummary());
