function doubleOddIndices (numbers) {
  for (let counter = 0; counter < numbers.length; counter += 1) {
    if (counter % 2 !== 0) {
      let currentNum = numbers[counter];
      numbers[counter] = (2 * currentNum);
    }
  }
  console.log(numbers);
}

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
doubleOddIndices(numbers);