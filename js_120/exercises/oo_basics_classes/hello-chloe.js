class Cat {
  constructor(name) {
    this.name = name;
  }

  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat('Sohpie');
console.log(kitty.name);
kitty.rename('Chloe');
console.log(kitty.name);