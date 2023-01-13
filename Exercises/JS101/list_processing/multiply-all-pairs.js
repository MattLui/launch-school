function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (let index = 0; index < arr1.length; index += 1) {
    for (let index2 = 0; index2 < arr2.length; index2 += 1) {
      result.push(arr1[index] * arr2[index2]);
    }
  }
  console.log(result.sort((a, b) => (a - b)));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]