/* eslint-disable max-len */
/*
Examples
- Case insensitive

Data
- Use arrays to store the letters that are worth the various values

Algo
- Use a static property to store an object with the letters and scores
- Convert the word to lowercase
- Conver the string to an array so you can iterate using forEach
- Start with a result of 0
- In the score method, iterate through the string and add a score for each letter to the result
- Return the result
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static KEY = [
    [[1], ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']],
    [[2], ['d', 'g']],
    [[3], ['b', 'c', 'm', 'p']],
    [[4], ['f', 'h', 'v', 'w', 'y']],
    [[5], ['k']],
    [[8], ['j', 'x']],
    [[10], ['q','z']]
  ]

  score() {
    let result = 0;
    if (this.word) {
      this.word.toLowerCase().split('').forEach(letter => {
        Scrabble.KEY.forEach(value => {
          if (value[1].includes(letter)) {
            result += Number(value[0]);
          }
        });
      });
    }
    return result;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;