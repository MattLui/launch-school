function reverseNumber(integer) {
  let reversedNumberString = '';
  while (integer > 0) {
    reversedNumberString += (integer % 10);
    integer = Math.floor(integer / 10);
  }
  console.log(Number(reversedNumberString));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1