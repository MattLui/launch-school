/* eslint-disable max-len */
/*
Problem:
- Inputs: the given word and an array of strings
- Output: an array containing the word(s) that are anagrams of the given word

Examples:
- Identical words are not anagrams
- Anagrams are case insensitive
- Eliminate anagram subsets
- A word can have multiple anagrams

Data:
- The initial word is a string that is passed to the Anagram constructor
- The candidates are given in an array of strings
- The result is an array with zero or more strings

Algo:
- Create an empty result array
- Iterate through the strings in the given array
  - Check to make sure the words are not identical and have same length
  - Convert the strings to an array, sort them, and check to see if they have the same value
- Return the result array
*/

class Anagram {
  constructor (word) {
    this.word = word;
  }

  match(list) {
    let result = [];

    list.forEach(testWord => {
      let lowerTest = testWord.toLowerCase();
      let lowerWord = this.word.toLowerCase();
      if (lowerTest !== lowerWord) {
        if (lowerTest.split('').sort().join() === lowerWord.split('').sort().join()) {
          result.push(testWord);
        }
      }
    });

    return result;
  }
}

module.exports = Anagram;

