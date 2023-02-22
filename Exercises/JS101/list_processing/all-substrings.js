/*
Input: string
Output: a lit of all substrings
Rules:
  - Order the returned list by where the string in the substring begins
  - Order each set of substrings with the same index by length
    - This will naturally occur if we start from the beginning with each index
  - We can use the function from the previous exercise
Data structures:
  - Input: string
  - Output: array
Algorithm
  - Begin with an empty array
  - Iterate through each starting index in the given string
    beginning with the first character
  - Apply the leading substrings function to each string with a different index
  - Concatenate each substring to the result array
  - Log the resulting array to the console
*/

function leadingSubstrings(string) {
  let result = [];
  for (let count = 1; count <= string.length; count += 1) {
    result.push(string.slice(0, count));
  }
  return result;
}

function substrings(string) {
  let result = [];
  for (let count = 0; count < string.length; count += 1) {
    result = result.concat(leadingSubstrings (string.slice(count)));
  }
  console.log(result);
}

substrings('abcde');

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]*/