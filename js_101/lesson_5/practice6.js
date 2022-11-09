let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersArray = Object.entries(munsters);

munstersArray.forEach(member => {
  console.log(`${member[0]} is a ${member[1]['age']}-year-old ${member[1]['gender']}`);
});