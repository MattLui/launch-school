function fibonacci (number) {
  let num1 = 1;
  let num2 = 1;
  let current = 1;
  for (let counter = 1; counter <= number; counter += 1) {
    if (counter > 2) {
      current = num1 + num2;
      num1 = num2;
      num2 = current;
    }
  }
  return current;
}

console.log(
  fibonacci(20),
  fibonacci(50),
  fibonacci(75),
);