function compute (num1, num2, operation) {
  return operation (num1, num2);
}

function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

console.log(compute(2, 3, add));
console.log(compute(2, 4, subtract));