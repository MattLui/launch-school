function average (array) {
  let sum = 0;
  array.forEach(number => {
    sum += number;
  });
  let average = Math.floor(sum / array.length);
  console.log(average);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40