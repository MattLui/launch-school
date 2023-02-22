/*
Input: string
Output: array of substrings
Rules:
  - Each substring begins with the first letter
  - The list is ordered from shortest to longest
    - This will occur naturally if we start from the beginning
Data Structure:
  - Input: string
  - Output: array
Algorithm:
  - Begin with an empty array and a counter set to zero
  - For each letter in the input string, take a slice of the string
      beginning with the first letter and ending at the current count
  - Add the slice to the array
  - Increment the count
  - Log the array to the console
*/

function leadingSubstrings(string) {
  let result = [];
  for (let count = 1; count <= string.length; count += 1) {
    result.push(string.slice(0, count));
  }
  console.log(result);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]