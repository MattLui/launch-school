/*
Input:
- Grocery list in a two-dimensional array

Output:
- One-dimensional array
- Each fruit name appears the number of times equal to its quantity

Example:
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

Data:
- Given array contains sub-arrays
- Result array contains is one-dimensional

Algo:
- Start with an empty result array
- For each array containing a fruit and quantity pair in the given array:
  - For a number of times equal to the quantity,
    - Add one instance of the fruit name to the result array
- Return the result array
*/

function buyFruit(groceryList) {
  let result = [];
  groceryList.forEach(array => {
    for (let count = 1; count <= array[1]; count += 1) {
      result.push(array[0]);
    }
  });
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));