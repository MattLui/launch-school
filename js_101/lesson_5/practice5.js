let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;
let munstersArray = Object.entries(munsters);

munstersArray.forEach(member => {
  if (member[1].gender === 'male') {
    totalAge += member[1].age;
  }
});

console.log(totalAge);