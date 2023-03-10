// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

/*
Input: string
Output: character
Data: string, array
Rules:
  - The first occurrence counts
  - Case not important
Algo:
  - Convert all letters to lowercase
  - Convert the string to an array
  - Iterate through the array
  - Use filter to filter out characters that equal that character
  - Measure the length of each filtered array
  - Set the least common count to zero
  - If the common count is zero or the character occurs less than the current
    - Common count save that letter as the least common
  - Return the saved letter
*/

function leastCommonChar (string) {
  let lowerString = string.toLowerCase();
  let array = lowerString.split('');
  let commonCount = 0;
  let leastCommon = '';
  array.forEach (char => {
    let filteredArray = array.filter (char2 => char2 === char);
    if (commonCount === 0 || filteredArray.length < commonCount) {
      commonCount = filteredArray.length;
      leastCommon = char;
    }
  });
  return leastCommon;
}