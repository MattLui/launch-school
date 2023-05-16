function forEach (array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index]);
  }
}

forEach([1, 2, 3, 4], value => console.log(value * value));