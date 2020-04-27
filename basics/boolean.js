let temp = 71;

let isFreezing = temp <= 33;
let notFreezing = temp >= 70;
if (isFreezing) {
	console.log(`It is freezing outside- ${temp}`);
} else if (temp >= 110) {
	console.log(`It is way to hot outside`);
} else if (temp >= 60 && temp <= 90) {
	console.log('It is safe to go outside');
}

// coding
let age = 39;

let isChild = age <= 7;
let isSenior = age >= 65;
console.log(isChild, isSenior);
if (age <= 7) {
	console.log(`You are gonna get the kids discount rate`);
} else if (age >= 65) {
	console.log(`Senior rate will be applied`);
} else {
	console.log(`You will pay regular price`);
}
// coding
let isAccountLocked = false;
let userRole = 'admin';
if (isAccountLocked) {
	console.log('Account locked');
} else if (!isAccountLocked && userRole === 'admin') {
	console.log('Account is available for use. Welcome admin');
} else {
	console.log('Welcome');
}
// coding

let temperature = 45;
if (temp <= 32 && temp <= 40) {
	console.log('It is freezing');
} else if (temp > 40 && temp <= 90) {
	console.log("Go for it. It's pretty nice");
} else {
	console.log('It is hot outside');
}
// coding
let isGuest1Vegan = true;
let isGuest2Vegan = false;
if (isGuest1Vegan && isGuest2Vegan) {
	console.log('Only offer up vegan dishes');
} else if (isGuest1Vegan || isGuest2Vegan) {
	console.log('Offer some vegan options');
} else {
	console.log('Offer up anything on the menu');
}
