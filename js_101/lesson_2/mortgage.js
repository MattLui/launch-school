const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
  Number(number) < 0 ||
  Number.isNaN(Number(number));
}

prompt('Welcome to Mortgage Calculator!');

while (true) {
  prompt('------------------------------');
  prompt('What is the loan amount?');
  let amount = readline.question();
  while (isInvalidNumber(amount)) {
    prompt('Must enter a positive number');
    amount = readline.question();
  }

  prompt("What is the interest rate in %?");
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    prompt('Must enter a positive number');
    interestRate = readline.question();
  }

  prompt("What is the loan duration in years?");
  let years = readline.question();

  while (isInvalidNumber(years)) {
    prompt('Must enter a positive number');
    years = readline.question();
  }

  let loanDurationInMonths = Number(years) * 12;
  let monthlyRate = Number(interestRate) / 1200;

  let monthlyPayment = Number(amount) *
                  (monthlyRate /
                  (1 - Math.pow((1 + monthlyRate), (-loanDurationInMonths))));

  console.log(`Monthly payment: $${monthlyPayment.toFixed(2)}`);
  prompt("Would you like to begin again?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}