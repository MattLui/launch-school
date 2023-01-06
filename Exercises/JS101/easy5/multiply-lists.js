function multiplyList(arr1, arr2) {
  let newArr = [];
  while (arr1.length > 0) {
    newArr.push(arr1.shift() * arr2.shift());
  }
  console.log(newArr);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]