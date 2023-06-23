/*

Examples
- The given letter is at the widest point with no spaces before or after
  - A: no spaces before
  - B: one space before
- E is the highest letter we'll be given

Algo
- Given a letter, determine how many spaces are needed initially
  - Construct a key that specifies how many spaces
- Each time, decrease the number of spaces then print the corresponding letter
- Break into three components: before, during, and after the letter
*/


class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let range = this.makeRange(letter);
    let result = '';
    let diamondWidth = this.width(letter);
    range.forEach(letter => {
      result += this.center(this.makeRow(letter), diamondWidth) + '\n';
    });

    return result;
  }

  static center(content, width) {
    let spacesBefore = (width - content.length) / 2;
    let padding = (' ').repeat(spacesBefore);
    return `${padding}${content}${padding}`;
  }

  static makeRange(letter) {
    let range = [];
    for (let index = 0; this.alphabet[index] !== letter; index += 1) {
      range.push(this.alphabet[index]);
    }
    range.push(letter, ...range.slice().reverse());
    return range;
  }

  static width(letter) {
    if (letter === 'A') {
      return 1;
    } else {
      let numSpaces = 1;
      for (let index = 1; this.alphabet[index] !== letter; index += 1) {
        numSpaces += 2;
      }
      return numSpaces + 2;
    }
  }

  static makeRow(letter) {
    if (letter === 'A') {
      return 'A';
    } else {
      return letter + this.spacesBetween(letter) + letter;
    }
  }

  static spacesBetween(letter) {
    if (letter === 'A') {
      return ' ';
    } else {
      return ' '.repeat(this.width(letter) - 2);
    }
  }

  static KEY = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
  }
}

module.exports = Diamond;