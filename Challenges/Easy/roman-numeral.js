class RomanNumeral {
  constructor(num) {
    this.num = num;
  }

  static ROMAN_KEY = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  toRoman() {
    let romanString = '';
    let remainingNum = this.num;
    for (let index = 0; index < RomanNumeral.ROMAN_KEY.length; index += 1) {
      while (remainingNum >= RomanNumeral.ROMAN_KEY[index][0]) {
        romanString += RomanNumeral.ROMAN_KEY[index][1];
        remainingNum -= RomanNumeral.ROMAN_KEY[index][0];
      }
    }
    return romanString;
  }
}

module.exports = RomanNumeral;