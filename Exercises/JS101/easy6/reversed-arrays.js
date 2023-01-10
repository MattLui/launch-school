function reverse(array) {
  let copy = array.slice();
  for (let index = 0; index < array.length; index += 1) {
    array[index] = copy[array.length - (index + 1)];
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true