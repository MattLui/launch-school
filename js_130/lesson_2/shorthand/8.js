const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

// const { first, second, ...rest } = obj;

const first = obj.first;
const second = obj.second;
const rest = {
  third: [1, 2, 3],
  rest: {a: 'a', b: 'b' }
};

console.log(first, second, rest);