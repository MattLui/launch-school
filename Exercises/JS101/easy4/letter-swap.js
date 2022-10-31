function swap(string) {
  let array = string.split(' ');
  let result = [];
  array.forEach(element => {
    let reversedWord = element.split('');
    reversedWord[0] = element[element.length - 1];
    reversedWord[reversedWord.length - 1] = element[0];
    result.push(reversedWord.join(''));
  });
  return result;
}

console.log(
  swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
  swap('Abcde'),                         // "ebcdA"
  swap('a'));                              // "a"