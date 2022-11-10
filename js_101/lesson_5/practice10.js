let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortedArrayDescending(array) {
  arr.forEach(subarray => {
    if (typeof subarray[0] === 'string') {
      subarray.sort((a, b) => {
        return b.charCodeAt() - a.charCodeAt();
      });
    } else {
      subarray.sort((a, b) => {
        return b - a;
      });
    }
  });
  return array;
}

console.log(sortedArrayDescending(arr));