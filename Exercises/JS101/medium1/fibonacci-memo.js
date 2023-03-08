/*
Algo
- Start with the recursive function
- Add an object that stores values
- If the object already has a value, use it
- Otherwise, compute the value and store it to the object
*/

let memo = {};
function fibonacci(number) {
  if (number === 1 || number === 2) {
    return 1;
  } else if (memo[number]) {
    return memo[number];
  } else {
    memo[number] = (fibonacci(number - 1) + fibonacci(number - 2));
    return memo[number];
  }
}
console.log(
  fibonacci(1),       // 1
  fibonacci(2),       // 1
  fibonacci(3),       // 2
  fibonacci(4),       // 3
  fibonacci(5),       // 5
  fibonacci(12),      // 144
  fibonacci(20),      // 6765
  fibonacci(50),
  fibonacci(75)
);