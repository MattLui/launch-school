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

console.log(
  integerToString(4321),        // "4321"
  integerToString(0),           // "0"
  integerToString(5000),        // "5000"
  integerToString(1234567890)  // "1234567890"
);
