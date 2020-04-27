const userAge = 28;
let message;

userAge >= 18
	? (message = `You are eligible to vote`)
	: (message = `You have to wait ${18 - userAge} yr(s) to be eligible to vote`);

console.log(message);
const myAge = 18;
const showPage = () => {
	return 'Showing page';
};
const showErrorPage = () => {
	return 'Showing error page';
};
const msg = myAge >= 21 ? showPage() : showErrorPage();
console.log(msg);
const team = ['tyler', 'porter', 'jen'];

const teamMsg =
	team.length <= 4
		? `Team size: ${team.length}`
		: `Too many people on your team`;
console.log(teamMsg);
