function reverseSentence (string) {
  let result = string.split(' ').reverse().join(' ');
  console.log(result);
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"