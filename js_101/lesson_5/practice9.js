let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortedArray(array) {
  arr.forEach(subarray => {
    if (typeof subarray[0] === 'string') {
      subarray.sort();
    } else {
      subarray.sort((a, b) => a - b);
    }
  });
  return array;
}

console.log(sortedArray(arr));