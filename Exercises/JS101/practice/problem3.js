/* eslint-disable max-len */
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

/*
Input: string
Output: string with every 4th character of every 2nd word converted to upper case
Data: array, string
Algo:
   - Convert string to an array with each word being an element
   - Iterate through each element the array
   - If the index of the element is odd, then perform the capitalize 4th letter function
    - Capitalize 4th letter: take a string and convert it to an array
    - If the index of that character divided by 4 = 3, then it is a 4th letter
    - Modify that letter to upper case
    - Join the array back into a string
   - Modify the array back to a string and return it
*/

function toWeirdCase(string) {
  let array = string.split(' ');
  for (let index = 0; index < array.length; index += 1) {
    if (index % 2 === 1) {
      array[index] = capitalizeEveryFourth(array[index]);
    }
  }
  return array.join(' ');
}

function capitalizeEveryFourth (string) {
  let array = string.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (index % 4 === 3) {
      array[index] = array[index].toUpperCase();
    }
  }
  return array.join('');
}