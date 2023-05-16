let animal = {
  walk: function() {
    console.log("walking");
  },
  greet() {
    console.log(`hello my name is ${this.name}`);
  },
  init(name) {
    this.name = name;
    return this;
  }

};

let cat = Object.create(animal).init("cat");
cat.greet();