let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
    return undefined;
  });
});

//18
//7
//12
//undefined

console.log(myArr);