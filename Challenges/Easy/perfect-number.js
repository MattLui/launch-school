/*
Problem
- Input: a number (assume it is an integer)
- Output: string with the number's type

Examples
- Negative number raises an error
- Otherwise, the number is one of three types
- The test cases use a static method on the PerfectNumber class

Algo
- Throw an error if the number is less than 1
- Initialize aliquot sum to 0
- Find the number's divisors
  - Start with test number at 1
  - See if the test number is a divisor
  - If it is, add it to the aliquot sum
  - Increment the test number
- If the aliquot sum is = to the given number return 'perfect'
- If less, 'deficient'
- If more, 'abudnant'
*/

class PerfectNumber {
  static classify(num) {
    if (num < 1) {
      throw new Error('invalid input');
    }
    let aliquotSum = 0;
    for (let count = 1; count < num; count += 1) {
      if (num % count === 0) {
        aliquotSum += count;
      }
    }
    if (aliquotSum === num) {
      return 'perfect';
    } else if (aliquotSum < num) {
      return 'deficient';
    } else {
      return 'abundant';
    }
  }
}

module.exports = PerfectNumber;

console.log(PerfectNumber.classify(12));