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
let addIncome = function (account, amount) {
	account.income = amount;
};
let resetAccount = (account) => {
	account.income = 0;
	account.expenses = 0;
};
let getAccountSummary = (account) => {
	return {
		summary: `${account.name}-total expenses ${account.expenses} - income ${
			account.income
		} and balance of ${account.income - account.expenses}`,
	};
};
myAccount.expenses = 678;
addIncome(myAccount, 1200);
addExpense(myAccount, 22.75);
let summary = getAccountSummary(myAccount);
console.log(summary.summary);
