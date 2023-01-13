/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/*
Input: array of integers
Output: integer
Rules:
  -the integers at the index N will not count towards the left and right sums
  -an empty array should return 0 for this problem
Algorithm:
  -For each integer in input array
    -get the right and the left slice of the array, starting from that int's index
    -if the sums of those slices are equal, return the index `N`
  -Return -1
*/

function findEvenIndex(ints) {
  for (let n = 0; n < ints.length; n += 1) {
    let leftSide = ints.slice(0, n);
    let rightSide = ints.slice(n + 1);
    let leftSideSum = leftSide.reduce((sum, currVal) => sum + currVal, 0);
    let rightSideSum = rightSide.reduce((sum, currVal) => sum + currVal, 0);

    if (leftSideSum === rightSideSum) return n;
  }

  return -1;
}

/*
Input: array of numbers (or empty)
Output: non-negative integer
Rules:
  - array might be emtpy -> then greatest sum is 0
  - array may contain positive, zero or negative numbers
  - minimum sum an array can have is 0
  - if an array only contains negatives, return 0
Data structure:
  -Input: array of integers
  -Output: integer
  reduce?
Algorithm:
  - Declare a variable `maxSum` and assign it to 0
  - If the input array doesn't contain negative numbers
    - sum the numbers in the array and return the sum
  - if it only contains negative numbers
    - return `maxSum`
  -else
    -get all possible subarrays of subsequent numbers
      -for each num in input array
        -create an array that includes that number
        -for each subsequent number
          -push it in the array
          -get the sum of that array
          -if it's > `maxSum`, reassign `maxSum` to it
  - return `maxSum`
*/

function maxSequence(arr) {
  let maxSum = 0;
  if (arr.length === 0) return 0;

  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      let subarr = arr.slice(start, end + 1);
      let sum = subarr.reduce((a,b) => a + b);
      if (sum > maxSum) maxSum = sum;
    }
  }

  return maxSum;
}
