/* eslint-disable max-len */
/*
P
- In: string of digits, length
- Out: array of sub-strings of specified length

E:
- If you ask for a larger series than the string, throw an error

D:
- series instances are created with a string of digits
- 'slices' is the method for each new series, taking an argument for length
- Output contains array of arrays

A:
- Throw an error if slice length is greater than string length
- Iterate through digit string by turning it into an array
- Start with an empty result array
- Add one array to the result array with the right length
- Each time, start at one digit to the right
- End when you are at total length - series length
*/

class Series {
  constructor (digits) {
    this.digits = digits;
  }

  slices(sliceLength) {
    if (sliceLength > this.digits.length) {
      throw new Error('invalid slice length');
    }
    let result = [];
    let digitArray = this.digits.split('').map(digit => Number(digit));
    for (let index = 0; index <= (digitArray.length - sliceLength); index += 1) {
      result.push(digitArray.slice(index, index + sliceLength));
    }
    return result;
  }
}

module.exports = Series;