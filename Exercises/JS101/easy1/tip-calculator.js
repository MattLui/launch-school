const readline = require('readline-sync');

let bill = parseFloat(readline.question("What is the bill?"));

let tipPercentage = parseFloat(readline.question("What is the tip percentage? "));

let tip = bill * tipPercentage * .01;
let total = bill + tip;

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);