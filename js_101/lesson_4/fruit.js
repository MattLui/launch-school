let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(object) {
  let keys = Object.keys(produce);
  let fruitObject = {};

  for (let counter = 0; counter < keys.length; counter += 1) {
    let currentKey = keys[counter];
    let currentValue = object[currentKey];

    if (currentValue === 'Fruit') {
      fruitObject[currentKey] = currentValue;
    }
  }
  console.log(fruitObject);
}
selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }