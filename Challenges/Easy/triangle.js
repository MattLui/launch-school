class Triangle {
  constructor (side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error('all sides must be greater than zero');
    }

    if (side1 + side2 <= side3 ||
        side2 + side3 <= side1 ||
        side3 + side1 <= side2) {
      throw new Error('invalid side lengths');
    }
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return "equilateral";
    } else if (this.side1 === this.side2 ||
              this.side2 === this.side3 ||
              this.side1 === this.side3) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

let triangle = new Triangle(2, 2, 2);
console.log(triangle.kind());

module.exports = Triangle;