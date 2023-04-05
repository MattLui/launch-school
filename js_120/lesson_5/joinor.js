/*
Rules
- Conjunction always before the last element
- No delimiter if there are two elements
  - Delimeter after each element but the last otherwise

Algo
- If two elements, return that case
- Otherwise take all the elements of the array except the last one
  - Create a new array with the delimeter added to each element
  - Then add the last element in the original array to the output
*/


function joinOr(array, delimiter = ', ', conjunction = 'or') {
  if (array.length === 2) {
    return `${array[0]} ${conjunction} ${array[1]}`;
  } else {
    let allButLast = array.slice(0, -1).join(delimiter);
    return allButLast + delimiter + conjunction + ' ' + array[array.length - 1];
  }
}

console.log(joinOr([1, 2]));
console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));