function stringToInteger(string) {
  let number = 0;

  for (let counter = 0; counter < string.length; counter += 1) {
    let digit = string[counter];
    number = (number * 10) + (digit - "0");
  }

  return number;
}

console.log(stringToInteger("4321") === 4321);
console.log(stringToInteger("570") === 570);
