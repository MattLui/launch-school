function halvsies(array) {
  let arr1 = [];
  let arr2 = [];
  for (let counter = 0; counter < array.length; counter += 1) {
    if (counter < (array.length / 2)) {
      arr1.push(array[counter]);
    } else {
      arr2.push(array[counter]);
    }
  }
  let newArr = [arr1, arr2];
  console.log(newArr);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]