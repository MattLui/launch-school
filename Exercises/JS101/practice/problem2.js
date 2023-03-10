/* eslint-disable max-len */
/* eslint-disable no-undef */
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

/*
Input: array of integers
Output: number or null
Data: use subarrays to segment out 5 consecutive integers
Algo:
  - If the array has less than 5 elements, return null
  - Use slice to create subarrays for each 5 consecutive integers
  - Use reduce to compute the sum of the 5 integers
  - Iterate through the subarrays
    - Set the sum of the first 5 as the minimum
    - If another set has a lower value, set that as the minimum
  - Return the minimum
*/

function minimumSum(array) {
  if (array.length < 5) return null;
  let numSubArrays = array.length - 4;
  let subArrays = [];
  for (let count = 0; count < numSubArrays; count += 1) {
    subArrays.push(array.slice(count, count + 5));
  }
  let minimum = 0;
  subArrays.forEach(sub => {
    if (sub.reduce((accumulator, current) => accumulator + current) < minimum || minimum === 0) {
      minimum = sub.reduce((accumulator, current) => accumulator + current);
    }
  });
  return minimum;
}