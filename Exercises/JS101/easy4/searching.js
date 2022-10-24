const readline = require('readline-sync');

let num1 = readline.question('Enter the 1st number: ');
let num2 = readline.question('Enter the 2nd number: ');
let num3 = readline.question('Enter the 3rd number: ');
let num4 = readline.question('Enter the 4th number: ');
let num5 = readline.question('Enter the 5th number: ');
let num6 = readline.question('Enter the 6th number: ');
let array = [num1, num2, num3, num4, num5];

if (array.includes(num6)) {
  console.log(`The number ${num6} appears in ${array}.`);
} else {
  console.log(`The number ${num6} does not appear in ${array}.`);
}