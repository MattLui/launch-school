let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOfThree = arr.map(element => {
  return element.filter(number => {
    return number % 3 === 0;
  });
});

console.log(multiplesOfThree);