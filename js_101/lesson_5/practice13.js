let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let sortedArr = arr.sort(function compareFn(a, b) {
  if (a.filter(number => number % 2 === 1).reduce((sum, next) => sum + next)
  < b.filter(number => number % 2 === 1).reduce((sum, next) => sum + next)) {
    return -1;
  }
  if (a.filter(number => number % 2 === 1).reduce((sum, next) => sum + next)
  > b.filter(number => number % 2 === 1).reduce((sum, next) => sum + next)) {
    return 1;
  }
  return 0;
});

console.log(sortedArr);