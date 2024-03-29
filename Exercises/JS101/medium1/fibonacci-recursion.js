function fibonacci(number) {
  if (number === 1 || number === 2) {
    return 1;
  }
  return (fibonacci(number - 1) + fibonacci(number - 2));
}

console.log(
  fibonacci(1),       // 1
  fibonacci(2),       // 1
  fibonacci(3),       // 2
  fibonacci(4),       // 3
  fibonacci(5),       // 5
  fibonacci(12),      // 144
  fibonacci(20)      // 6765
);