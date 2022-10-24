const readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retirementAge = readline.question('At what wage would you like to retire? ');

let today = new Date();
let currentYear = today.getFullYear();
let yearsLeft = retirementAge - age;
let retirementYear = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}\nYou only have ${yearsLeft} years to go!`);
