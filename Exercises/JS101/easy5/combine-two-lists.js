function interleave(array1, array2) {
  let newArr = [];
  while  (array1.length > 0) {
    newArr.push(array1.shift());
    newArr.push(array2.shift());
  }
  console.log(newArr);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]