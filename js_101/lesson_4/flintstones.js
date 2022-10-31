let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let newObj = {};

flintstones.forEach((name, index) => {
  newObj[name] = index;
});

console.log(newObj);