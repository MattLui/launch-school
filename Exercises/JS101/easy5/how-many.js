let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let newArr = [];
  arr.forEach(element => {
    if (!newArr[element]) {
      newArr[element] = 1;
    } else {
      newArr[element] += 1;
    }
  });

  for (let item in newArr) {
    console.log(`${item} => ${newArr[item]}`);
  }
}

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/