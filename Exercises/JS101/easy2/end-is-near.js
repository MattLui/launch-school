function penultimate (str) {
  str = str.split (" ");
  let word = str.slice(-2, (str.length - 1));
  return word.join ("");
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true */