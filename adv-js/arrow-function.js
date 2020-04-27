const square = (num) => num * num;

console.log(square(4));
const people = [
	{
		name: 'andrew',
		age: 29,
	},
	{
		name: 'jen',
		age: 19,
	},
	{
		name: 'Robin',
		age: 30,
	},
];
const under30 = people.filter((ind) => ind.age < 30);
console.log(under30);
const age19 = people.filter((ind) => ind.age === 19);
console.log(age19);
