var catImage;
var pudding;

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);

pudding.walk();