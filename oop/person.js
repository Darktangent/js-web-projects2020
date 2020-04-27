const Person = function (firstName, lastName, age = 0, likes = []) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.likes = likes;
};
Person.prototype.getBio = function () {
	let bio = `${this.firstName} is ${this.age}`;
	let that = this;
	this.likes.forEach(function (like) {
		bio += ` ${that.firstName} likes ${like}.`;
	});

	return bio;
};
Person.prototype.setName = function (fullName) {
	this.firstName = `${fullName.split(' ')[0]}`;
	this.lastName = `${this.lastName.split(' ')[1]}`;
};
// const me = new Person('Andrei', 'Mead', 29, ['Biking', 'Fishing']);
// console.log(me.getBio());
// me.setName('Rohan Ganguly');
// console.log(me.getBio());
// const person2 = new Person('jen', 'turner', 20, ['Reading', 'Dancing']);
// console.log(person2.getBio());
// class
class PersonClass {
	constructor(firstName, lastName, age = 0, likes = []) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.likes = likes;
	}
	getBio() {
		let bio = `${this.firstName} is ${this.age}`;
		let that = this;
		this.likes.forEach(function (like) {
			bio += ` ${that.firstName} likes ${like}.`;
		});

		return bio;
	}
	setName(fullName) {
		this.firstName = `${fullName.split(' ')[0]}`;
		this.lastName = `${this.lastName.split(' ')[1]}`;
	}
	set personFullName(fullName) {
		this.firstName = `${fullName.split(' ')[0]}`;
		this.lastName = `${this.lastName.split(' ')[1]}`;
	}
	get personFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
class Employee extends PersonClass {
	constructor(firstName, lastName, age, position, likes) {
		super(firstName, lastName, age, likes);
		this.position = position;
	}
	getBio() {
		let bio = `${this.personFullName} ${this.lastName} is a ${this.position} and he likes`;
		let that = this;
		this.likes.forEach(function (like) {
			bio += ` ${that.firstName} likes ${like}.`;
		});

		return bio;
	}
	getYearsLeft() {
		return 65 - this.age;
	}
}
class Student extends PersonClass {
	constructor(firstName, lastName, age, likes, grades) {
		super(firstName, lastName, age, likes);
		this.grades = grades;
	}
	getBio() {
		if (this.grades >= 70) {
			return `${this.firstName} ${this.lastName} is passing the class`;
		} else if (this.grades < 70) {
			return `${this.firstName} ${this.lastName} is failing the class`;
		}
	}
	updateGrade(change) {
		this.grades += change;
	}
}
const myPerson = new PersonClass('Andrew', 'Nagoie', 43, ['Biking', 'Fishing']);
const me = new Employee('Andrei', 'Mead', 29, 'developer', [
	'Biking',
	'Fishing',
]);
console.log(me.getYearsLeft());
console.log(me.getBio());
me.setName('Rohan Ganguly');
console.log(me.getBio());
const person2 = new PersonClass('jen', 'turner', 20, ['Reading', 'Dancing']);
console.log(person2.getBio());
