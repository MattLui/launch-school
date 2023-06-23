function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();
console.log(incrementCounter1());
console.log(incrementCounter1());

console.log(incrementCounter2());
console.log(incrementCounter2());

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); //prod is set to 2
let result = bar(3); //result is 6
result += bar(4); //prod = 24, result = 30
result += bar(5); //prod = 24 * 5 = 120. Result = 30 + 120 = 150
console.log(result); //150