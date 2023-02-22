/*
Input: array of numbers
Output: sum of sums of each leading subsequence in the array
Rules: each array contains at least one number
Data structures:
  - Input: array
  - Output: number
Algorithm:
  - Start with a result variable set to zero
  - Start with a counter equal to the number of elements in the input
  - For each number in the input, add the number times
    the current counter to the result
  - Then decrease the counter by one
    - For example, if the counter is at 3, then add the first number times three
    - Then add the next number times two, etc.
  - Log the result
*/

function sumOfSums(numberArray) {
  let result = 0;
  let counter = numberArray.length;
  for (let index = 0; index < numberArray.length; index += 1) {
    result += counter * numberArray[index];
    counter -= 1;
  }
  console.log(result);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35