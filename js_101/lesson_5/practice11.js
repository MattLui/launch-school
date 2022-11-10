let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(
  arr.map(object => {
    let newObject = {};
    for (let key in object) {
      newObject[key] = object[key] + 1;
    }
    return newObject;
  })
);

console.log(arr);