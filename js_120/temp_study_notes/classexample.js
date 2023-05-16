class Animal {
  constructor (name) {
    this.name = name;
  }
  walk() {
    console.log('walking');
  }
  greet() {
    console.log(`hello my name is ${this.name}`);
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

let garfield = new Cat('garfield', 13);
garfield.greet();
console.log(Object.getPrototypeOf(garfield) === Cat.prototype);
console.log(Object.getPrototypeOf(Cat.prototype) === Animal.prototype);
console.log(garfield.constructor === Cat);