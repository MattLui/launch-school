/* eslint-disable max-lines-per-function */

function createProduct (id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(price) {
      if (price < 0) {
        console.log('Invalid price!');
      } else {
        this.price = price;
      }
    },
    describeProduct() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: ${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let rock = createProduct (3, 'Rock', 10, 69);

console.log(rock);
rock.describeProduct();

console.log(scissors);
scissors.setPrice(-69);
drill.setPrice(3);
console.log(drill.price);