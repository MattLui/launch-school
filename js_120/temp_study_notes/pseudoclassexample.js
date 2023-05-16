//Pseudo-Classical Inheritance
function Tree (type) {
  this.type = type;
}

Tree.prototype.bearFruit = function() {
  return this.type;
};

function Sapling (type) {
  Tree.call(this, type);
}

Sapling.prototype = Object.create(Tree.prototype);
Sapling.prototype.constructor = Sapling;

let good = new Tree("good");
let bad = new Tree("bad");
let sap = new Sapling("good");

console.log(good.bearFruit());
console.log(bad.bearFruit());
console.log(sap.bearFruit());