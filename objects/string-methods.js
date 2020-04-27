let name = 'Rohan Ganguly';
console.log(name.length);
console.log(name.slice(-3, name.length));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.includes('y'));
let password = 'sjkfhsjhf12hlh';
let isValidPassword = password.length > 8 && !password.includes('password');
console.log(isValidPassword);
