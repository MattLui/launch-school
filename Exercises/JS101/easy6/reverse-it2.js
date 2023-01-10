function reverseWords (string) {
  let array = string.split(' ');
  let result = array.map (word => {
    if (word.length >= 5) {
      return reverseLetters(word);
    } else {
      return word;
    }
  });
  console.log(result.join(' '));
}

function reverseLetters(string) {
  return string.split('').reverse().join('');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"