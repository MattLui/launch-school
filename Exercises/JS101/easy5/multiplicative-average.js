function multiplicativeAverage(array) {
  let num = 1;
  array.forEach(value => {
    num *= value;
  });
  num /= array.length;
  let str = num.toFixed(3);
  console.log(str);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"