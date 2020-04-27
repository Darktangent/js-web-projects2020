const account = {
	name: 'Rohan Ganguly',
	expenses: [{ description: 'coffee @capitalone cafe', amount: 2.99 }],
	addExpense: function (description, amount) {
		// console.log(this.expenses);
		//  { ...this.expenses, description, amount };
		return this.expenses.push({ description, amount });
	},
	getAccountSummary: function () {
		let totalExpenses = 0;
		let totalIncome = 0;
		this.expenses.map((expense) => {
			// console.log(expense.amount);
			return (totalExpenses += expense.amount);
		});
		this.income.map((income) => {
			// console.log(expense.amount);
			return (totalIncome += income.amount);
		});
		let balance = totalIncome - totalExpenses;

		return `${this.name} has $${totalIncome.toFixed(
			2
		)} in income and $${totalExpenses.toFixed(
			2
		)} in expense. Balance $${balance.toFixed(2)}`;
	},
	income: [],
	addIncome: function (description, amount) {
		return this.income.push({ description, amount });
	},
};
account.addExpense(`sandwich @adam's`, 2.39);
console.log(account.expenses);
account.addIncome('job', 3000);
account.addExpense(`rent payment`, 950);
let total = account.getAccountSummary();
console.log(total);
