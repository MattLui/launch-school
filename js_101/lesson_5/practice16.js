let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

let solution = {};

arr.forEach(subArray => {
  solution[subArray[0]] = subArray[1];
});

console.log(solution);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }