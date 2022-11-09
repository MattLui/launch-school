let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortedArrayDescending(array) {
  arr.forEach(subarray => {
    if (typeof subarray[0] === 'string') {
      subarray.sort((a, b) => b - a);
    } else {
      subarray.sort((a, b) => b - a);
    }
  });
  return array;
}

console.log(sortedArrayDescending(arr));

//Output: [ [ 'b', 'c', 'a' ], [ 11, 2, -3 ], [ 'blue', 'black', 'green' ] ]