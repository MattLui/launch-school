function isColorValid(color) {
  return (color === "blue" || color === "green");
}

const isColorValid2 = color => color === "blue" || color === "green";

console.log(isColorValid("blue"));
console.log(isColorValid2("black"));