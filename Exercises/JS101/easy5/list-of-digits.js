/*function digitList(num) {
  let arr = [];
  let str = num.toString();
  for (let idx = 0; idx < str.length; idx += 1) {
    arr.push(Number(str[idx]));
  }
  console.log(arr);
}*/

function digitListMap(num) {
  let arr = num.toString().split('');
  let newArr = arr.map(val => Number(val));
  console.log(newArr);
}

digitListMap(12345);       // [1, 2, 3, 4, 5]
digitListMap(7);           // [7]
digitListMap(375290);      // [3, 7, 5, 2, 9, 0]
digitListMap(444);         // [4, 4, 4]
