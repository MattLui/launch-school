/* eslint-disable max-len */
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

/*
Input: array of numbers
Output: array of two numbers
Data: array
Algo:
  - Create an array with subarrays containing each pair
  - Iterate through each subarray and compute the difference
  - Set the minimum to zero
  - If the minimum is zero or the absolute value difference is less than minimum,
    - Store the value as minimum
    - And store that pair as the result
  - Return the pair
*/

function pairs (array) {
  let pairs = [];
  for (let index = 0; index < array.length - 1; index += 1) {
    for (let index2 = 1; (index + index2) < array.length; index2 += 1) {
      pairs.push([array[index], array[index + index2]]);
    }
  }
  return pairs;
}

function closestNumbers(array) {
  let minimumNumber = 0;
  let minimumPair = [];
  pairs(array).forEach(pair => {
    let pairDifference = Math.abs(pair[0] - pair[1]);
    if (pairDifference < minimumNumber || minimumNumber === 0) {
      minimumNumber = pairDifference;
      minimumPair = pair;
    }
  });
  return minimumPair;
}