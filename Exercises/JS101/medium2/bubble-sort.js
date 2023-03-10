/* eslint-disable max-len */
/*
Algo
- Main loop: if no swaps are made, return the array
- If swaps were made, repeat the main loop
- Within the main loop, iterate through the array for each element exclusive of the last one
- Compare the value of the current element with the next element
- If the first is greater than the second, swap the elements
*/

function bubbleSort(array) {
  while (true) {
    let swapsMade = false;
    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        swapsMade = true;
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
      }
    }
    if (swapsMade === false) {
      return array;
    }
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]