function catAge (humanYears) {
  if (humanYears == 0) {
    return 0;
  } else if (humanYears == 1) {
    return 15;
  } else if (humanYears == 2) {
    return 24;
  } else {
    return (24 + 4*(humanYears-2));
  }
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));