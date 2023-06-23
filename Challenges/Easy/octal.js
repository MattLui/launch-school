/*
Problem:
- Input: octal input string
- Output: decimal output

Examples:
- Treat invalid input as octal 0

Data:
- Use a toDecimal method for octal objects created using Octal

Algo:
- Store the length of the string
- Convert the string to a number
- Start with a result number of 0
- Start with an exponent of 0
  - Take the number and compute the remainder after dividing by 10
  - Add that number times 8 to the power of the exponent to the result
  - Increment the the exponent by 1
  - Subtract the remainder from the number and divide number by 10
- Do this process as long as the number is > 0
- Return the result number
*/

class Octal {
  constructor(inputString) {
    this.octalString = inputString;
  }

  toDecimal() {
    if (!this.validOctal()) {
      return 0;
    }
    let number = Number(this.octalString);
    let result = 0;
    let exponent = 0;
    while (number > 0) {
      result += (number % 10) * Math.pow(8, exponent);
      exponent += 1;
      number -= number % 10;
      number /= 10;
    }
    return result;
  }

  validOctal() {
    return this.octalString.split('').every(char => char.match(/[0-7]/));
  }
}

module.exports = Octal;