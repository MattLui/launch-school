function findFibonacciIndexByLength(length) {
  let count = 2;
  let fibonacci = [1, 1];

  do {
    fibonacci[count] = fibonacci[count - 1] + fibonacci[count - 2];
    count += 1;
  } while ((fibonacci[count - 1].toString().length) < length);

  return fibonacci.length;
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));