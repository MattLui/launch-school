/*
Input: number
Output: number
Rules:
  - rotate one less time than number of digits in the original number
Algo:
  - Set a number equal to number of digits in the given number
    - Conver it to a string to determine the length
  - Iterate through the given number for one less time than the number of digits
    - Use the rotate rightmost digits function with count being number of digits
    - Decrease the count by 1 each time
*/

function rotateRightmostDigits(number, count) {
  let string = number.toString();
  let leftHalf = string.slice(0, (string.length - count));
  let rightHalf = string.slice(-count);
  let rotatedRightHalf = rightHalf.slice(1).concat(rightHalf[0]);
  let result = Number(leftHalf + rotatedRightHalf);
  return result;
}

function maxRotation(number) {
  let numDigits = number.toString().length;
  for (numDigits; numDigits > 1; numDigits -= 1) {
    number = rotateRightmostDigits(number, numDigits);
  }
  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845