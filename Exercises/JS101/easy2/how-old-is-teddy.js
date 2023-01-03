let age = 0;

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

age = randomBetween(20, 120);

console.log(`Teddy is ${age} years old!`);