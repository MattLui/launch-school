function crunch(string) {
  let index = 0;
  let newString = '';

  while (index < string.length) {
    if (string[index] !== string[index + 1]) {
      newString += string[index];
    }
    index += 1;
  }
  console.log(newString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""