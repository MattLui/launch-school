/*
Input: string
Ouput: list of all palindromic substrings
Rules:
  - A palindrome is a string that reads the same forward and backward
  - The substrings in the returned list should by sorted by order of appearance
    in the input string
  - Duplicate substrings should be included multiple times
  - Use the substrings function from the previous exercise
  - Case matters
  - Single characters are not palindromes
Examples:
  palindromes('abcd');       // []
  palindromes('madam');      // [ "madam", "ada" ]

  palindromes('hello-madam-did-madam-goodbye');
  // returns
  // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  //   "-madam-", "madam", "ada", "oo" ]

  palindromes('knitting cassettes');
  // returns
  // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
Data Structures:
  - Input: string
  - Output: array of strings
Algorithm:
  - Use the substrings function to create an array with all of the
    substrings in the input string
  - Filter the array for strings that meet the criteria:
    - Length greater than 1
    - Is a palindrome
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
  return result;
}

function palindromes(string) {
  let substringArray = substrings(string);
  let filteredArray = substringArray.filter(string => {
    return ((string.length > 1) && (string.split('').reverse().join('') === string));
  });
  console.log(filteredArray);
}

palindromes('madam');
palindromes('abcd');
palindromes('hello-madam-did-madam-goodbye');
palindromes('knitting cassettes');