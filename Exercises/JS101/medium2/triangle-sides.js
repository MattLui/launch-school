/* eslint-disable max-len */
/*
Algo
- Sort the numbers in an array smallest to largest
- If any of the numbers are 0, it's invalid
- If the first two numbers are less than the third, it's invalid
- If the numbers are equal, it's equilateral
- If the first two numbers, the last two numbers, or the first and third number are the same
  it's isosceles
- Otherwise it's scalene
- Output the result
*/

function triangle (side1, side2, side) {
  let array = [side1, side2, side];
  array.sort((a, b) => a - b);
  if (array.includes(0)) {
    return 'invalid';
  } else if (array[0] + array[1] < array [2]) {
    return 'invalid';
  } else if (array[0] === array[1] && array[1] === array[2]) {
    return 'equilateral';
  } else if ((array[0] === array[1]) || (array[0] === array[2]) || (array[1] === array[2])) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(
  triangle(3, 3, 3),
  triangle(3, 3, 1.5),
  triangle(3, 4, 5),
  triangle(0, 3, 3),
  triangle(3, 1, 1)
);