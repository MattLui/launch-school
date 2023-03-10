// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

/*
Input: array of numbers
Output: array
Data structure: use array map
Algo:
  - Map the given array to a new array containing the solutions
  - Use filter to determine which numbers are less than the current number
  - Use a function that deletes duplicates
  - After deleting duplicates, return the length of the filtered array
*/

function smallerNumbersThanCurrent(array) {
  return array.map (num => {
    return removeDuplicates(array.filter (num2 => num2 < num)).length;
  });
}

function removeDuplicates(array) {
  let uniques = [];
  for (let index = 0; index < array.length; index += 1) {
    if (!uniques.includes(array[index])) {
      uniques.push(array[index]);
    }
  }
  return uniques;
}

