function stringToSignedInteger(string) {
  if (string[0] === "-") {
    return stringToInteger(string.slice(1)) * -1;
  } else if (string[0] === "+") {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

function stringToInteger(string) {
  let number = 0;

  for (let counter = 0; counter < string.length; counter += 1) {
    let digit = string[counter];
    number = (number * 10) + (digit - "0");
  }

  return number;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true