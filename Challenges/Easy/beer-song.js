class BeerSong {
  static verse(num) {
    if (num > 2) {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
`Take one down and pass it around, ${num - 1} bottles of beer ` +
"on the wall.\n";
    } else if (num === 2) {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
`Take one down and pass it around, ${num - 1} bottle of beer ` +
"on the wall.\n";
    } else if (num === 1) {
      return `${num} bottle of beer on the wall, ${num} bottle of beer.\n` +
"Take it down and pass it around, no more bottles of beer " +
"on the wall.\n";
    } else {
      return "No more bottles of beer on the wall, no more " +
"bottles of beer.\nGo to the store and buy some " +
"more, 99 bottles of beer on the wall.\n";
    }
  }

  static verses(start, end) {
    let current = start;
    let result = '';
    while (current >= end) {
      result += BeerSong.verse(current);
      current -= 1;
      if (current >= end) {
        result += "\n";
      }
    }
    return result;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;

console.log(BeerSong.lyrics());