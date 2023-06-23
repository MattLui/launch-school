function myBind(func, obj, ...boundArgs) {
  return function(...args) {
    func.apply(obj, [...boundArgs, ...args]);
  };
}

function sayName() {
  console.log(this.name);
}

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

let obj1 = {
  name: "Odell"
};

let bound = myBind(sayName, obj1);
bound();

let greetOdell = myBind(greet, obj1);
greetOdell();

greetOdell('Hello');