/*
Input: array
Output: new array with first element rotated to the end
Rules:
  Do not modify original array
  If the input is not an array, return undefined
  If input is an empty array, return empty array

Examples:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Data: arrays

Algo:
- Create a new result array with all of the elements
  of the given array starting at index 1
- Concatenate the first element of the given array to the end of the
  result array
- Return the result array
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  {
    let result = array.slice(1);
    result.push(array[0]);
    return result;
  }
}

console.log(
  rotateArray([7, 3, 5, 2, 9, 1]),       // [3, 5, 2, 9, 1, 7]
  rotateArray(['a', 'b', 'c']),          // ["b", "c", "a"]
  rotateArray(['a']),                    // ["a"]
  rotateArray([1, 'a', 3, 'c']),         // ["a", 3, "c", 1]
  rotateArray([{ a: 2 }, [1, 2], 3]),    // [[1, 2], 3, { a: 2 }]
  rotateArray([]),                       // []

  // return `undefined` if the argument is not an array
  rotateArray(),                         // undefined
  rotateArray(1));                        // undefined