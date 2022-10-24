const readline = require('readline-sync');

let num = readline.question("Please enter an integer greater than 0: ");
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (operation === "s") {
  let answer = 0;
  for (let count = 1; count <= num; count += 1) {
    answer += count;
  }
  console.log(`\nThe sum of the integers between 1 and ${num} is ${answer}.`);
} else if (operation === "p") {
  let answer = 1;
  for (let count = 1; count <= num; count += 1) {
    answer *= count;
  }
  console.log(`\nThe product of the integers between 1 and ${num} is ${answer}.`);
}