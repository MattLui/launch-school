/* eslint-disable no-lonely-if */
/* eslint-disable max-len */
/*
Problem
  Input: an array of strings
  Output: a new array of strings, sorted by number of adjacent consonants, from highest to lowest
  Explicit Rules:
    - If two strings are tied for number of adjacent consonants, retain the original order
    - Consonants are adjacent if they are next to each other or if they are separated by a space
  Implicit Rules
    - Some of the strings may have spaces in between words
  Questions
    - Must all strings include consonants?
    - Is case important?
    - What if there are two spaces between words?

Examples
  console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
  console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
  console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
  console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']
    - Case does not appear important
    - Not all strings include consonants
    - Having one consonant is equivalent to having no adjacent consonants
    - There aren't any strings with more than one space between words
Data Structures
  - An array for the result
  - An array to store values that are considered consonants

Algorithm
1. Start with: a function that takes a string as an input and returns the number of adjacent consonants
    - Remove the spaces from the input string
    - Initialize a count to zero
    - Initialize a temp string to an empty string
    - Iterate through the input string. For each letter:
      - If the letter is a consonant, concatenate it to the temp string
      - If the letter is a vowel:
        - If the temp string has has a length greater than 1 AND the temp string has a length greater than the current count, set the count to the length of the temp string
        - Reset the temp string to an empty string
    - Return the count
  2. For each element in the input array, use the function in step 1 to determine the number of consonants
  3. Sort the original array by the number of adjacent consonants in each one
  4. Return the result
*/

function sortStringsByConsonants(strings) {
  let sortedStrings = strings.sort((a, b) => adjacentConsonants(b) - adjacentConsonants(a));
  return sortedStrings;
}

function adjacentConsonants (string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempString = '';
  for (let index = 0; index < string.length; index += 1) {
    let letter = string[index];
    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempString += letter;
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
      }
    } else {
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
        tempString = '';
      }
    }
  }
  return count;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']