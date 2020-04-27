const book = {
	title: '1984',
	author: 'Geroge Orwell',
	pageCount: 326,
};
console.log(`${book[`title`]} by ${book.author}`);
book.title = 'Animal Farm';
console.log(`${book[`title`]} by ${book.author}`);
const anotherBook = { ...book, title: 'Another test' };
console.log(anotherBook.title);
// coding
const person = {
	name: 'Amdrew Mead',
	age: 32,
	location: 'San Jose, California',
};
console.log(
	`${person.name} is ${person.age} year(s) old and lives in ${person.location}`
);
// objects and functions
let myBook = {
	title: 'A peoples history',
	author: 'Howard Zin',
	pageCount: 723,
};
function getSummary(book) {
	return {
		summary: `${book.title} by ${book.author}`,
		pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
	};
	// console.log(`${book[`title`]} by ${book.author}`);
}
let myBookSummary = getSummary(myBook);
let bookSummary = getSummary(book);
console.log(myBookSummary.pageCountSummary);
// coding

function convertTemp(params) {
	return {
		celcius: (params - 32) * (5 / 9),
		fahrenheit: params,
		kelvin: (params + 459.67) * (5 / 9),
	};
}
const temp = convertTemp(102);
console.log(`${temp.celcius.toFixed(2)}C`);
console.log(`${temp.kelvin.toFixed(2)}K`);
// object reference
let myAccount = {
	name: 'John Smith',
	expenses: 0,
	income: 0,
};
let addExpense = function (account, amount) {
	// account.expenses = account.expenses + amount;
	account = { ...account };
	console.log(account);
};
addExpense(myAccount, 22.75);
console.log(myAccount);
