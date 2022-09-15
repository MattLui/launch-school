let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

function clone(object) {
  return Object.assign({}, object);
}

let objCopy = clone(obj);
console.log(objCopy);

objCopy.number = 2;
objCopy.string = 'xyz';
objCopy.array.push(4);
console.log(obj);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
console.log(objCopy); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }