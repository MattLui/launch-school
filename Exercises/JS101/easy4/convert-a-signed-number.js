function integerToString(num) {
  if (num === 0) return "0";

  let str = "";
  while (num > 0) {
    let digit = num % 10;
    str = digit + str;
    num = Math.floor(num / 10);
  }

  return str;
}

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case 1:
      return "+" + integerToString(num);
    case -1:
      return "-" + integerToString(-num);
    default:
      return integerToString(num);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");