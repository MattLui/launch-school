class Animal {
  move() {}
}

class Fish extends Animal {
  move() {
    console.log("swimming");
  }
}

class Cat extends Animal {
  move() {
    console.log("walking");
  }
}

class Sponge extends Animal {}
class Coral extends Animal {}

let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
animals.forEach(animal => animal.move());