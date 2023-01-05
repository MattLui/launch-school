function union(arr1, arr2) {
  //combines both arrays with no duplicates;
  let newArr = [];
  arr1.forEach(value => {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  });
  arr2.forEach(value => {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  });
  return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));