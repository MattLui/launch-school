class Animal {
  move() {
    console.log("generic movement");
  }
}

class Fish extends Animal {
  move() {
    console.log("swimming");
  }
}

class Dog extends Animal {
  move() {
    console.log("walking");
  }
}

class Starfish extends Animal {
}

let animals = [new Fish(), new Dog(), new Starfish()];
animals.forEach(animal => animal.move());