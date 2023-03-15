/*
Input: string
Output: array with a string and a number
Rules:
  - Input is all lowercase letters
  - Find the minimum substring repeated the maximum times
Algo:
  - Iterate through the string
  - Each time, take a slice starting at index 0 and ending one index later
  - If the slice repeated N times equals the string then it meets the criteria
    - N is the string's length divided by the slice's length
  - Return an array with the count and substring
*/

function repeatedSubs (string) {
  let count = 1;
  let substring = '';
  for (let index = 0; index < string.length; index += 1) {
    substring = string.slice(0, index + 1);
    if (substring.repeat(string.length / substring.length) === string) {
      count = (string.length / substring.length);
      break;
    }
  }
  return [substring, count];
}

console.log(repeatedSubs('ababab'));