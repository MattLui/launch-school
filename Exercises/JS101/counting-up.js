function sequence(number) {
  let result = [];
  for (let count = 1; count <= number; count += 1) {
    result.push(count);
  }
  console.log(result);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]