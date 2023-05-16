function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};

let a = new Circle(3);
let b = new Circle(4);

console.log(
  a.area().toFixed(2), // => 28.27
  b.area().toFixed(2), // => 50.27
  a.hasOwnProperty('area')); // => false