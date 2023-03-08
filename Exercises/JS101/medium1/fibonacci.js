/* eslint-disable no-undef */
/*
Algo
- Start with an empty array
- Begin a loop, each time adding the next fibonacci number to the array
- Test to see if the number of digits meets the specified requirement
- If it does, break out of the loop and return the number
- Otherwise, keep going
*/

function findFibonacciIndexByLength(length) {
  let fibonacci = [];
  let counter = 0;
  while (true) {
    if (counter < 2) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[counter - 2] + fibonacci[counter - 1]);
    }
    if (fibonacci[counter].toString().length >= length) break;
    counter += 1;
  }
  return BigInt(counter + 1);
}

console.log(
  findFibonacciIndexByLength(2n) === 7n,    // 1 1 2 3 5 8 13
  findFibonacciIndexByLength(3n) === 12n,   // 1 1 2 3 5 8 13 21 34 55 89 144
  findFibonacciIndexByLength(10n) === 45n,
  findFibonacciIndexByLength(16n) === 74n,
//  findFibonacciIndexByLength(100n) === 476n,
//  findFibonacciIndexByLength(1000n) === 4782n,
//  findFibonacciIndexByLength(10000n) === 47847n
  // The last example may take a minute or so to run.
);