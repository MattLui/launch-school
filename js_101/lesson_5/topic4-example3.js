console.log([[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
}));

//1
//3
//[1, 3]