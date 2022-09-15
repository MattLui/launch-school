let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(input, list) {
  return list.some((listVal) => input === listVal);
}

console.log(contains('Barcelona',destinations));
console.log(contains('Nashville',destinations));