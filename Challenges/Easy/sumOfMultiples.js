/* eslint-disable max-len */
/*
Problem:
- Input: natural number and set of 1+ other numbers.
  - May not be given the set of numbers
- Output: sum of multiples of numbers less than first number

Examples:
- If the set of numbers is not given, use 3 and 5
- 'to' is a static method that takes one number and returns the sum of multiples less than that number
- Each number can only count once

Data:
- The set of numbers can contain one or more numbers, use an array

Algo:
- For the static method 'to', use the instance method and pass in 3, 5 as arguments
- Start with 1 and increase one at a time as long as lower than max num
- Use array filter to see if the array contains a multiple of the current number
- If it does, add it to the result
*/

class SumOfMultiples {
  constructor (...nums) {
    this.multiples = (nums.length > 0) ? nums : [3, 5];
  }

  to (maxNum) {
    let result = 0;
    for (let counter = 1; counter < maxNum; counter += 1) {
      if (this.multiples.some(num => counter % num === 0)) {
        result += counter;
      }
    }
    return result;
  }

  static to (maxNum) {
    return new SumOfMultiples().to(maxNum);
  }
}

module.exports = SumOfMultiples;