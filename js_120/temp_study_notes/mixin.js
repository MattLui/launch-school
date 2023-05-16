const swimMixin = {
  swim() {
    console.log('swimming');
  }
};

class Human {}
Object.assign(Human.prototype, swimMixin);

class Bird {}

class Penguin extends Bird {}
Object.assign(Penguin.prototype, swimMixin);

let ned = new Human();
ned.swim();

let king = new Penguin();
king.swim();
console.log(Object.getPrototypeOf(king) === Penguin.prototype);
console.log(Object.getPrototypeOf(king) === swimMixin);