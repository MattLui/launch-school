const readline = require('readline-sync');

console.log('What is your age?');
let age = readline.question();

console.log('At what age would you like to retire?');
let retirementAge = readline.question();

let today = new Date();
let currentYear = today.getFullYear();
let yearsLeft = retirementAge - age;


console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsLeft}`);
console.log(`You only have ${yearsLeft} years to go!`);