let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

console.log(Object.entries(obj));

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let solution = Object.entries(obj).map(subArray => {
  if (subArray[1].type === 'fruit') {
    return subArray[1].colors.map(char => capitalize(char));
  }
  return subArray[1].size.toUpperCase();
});

console.log(solution);