function repeater (string) {
  //doubles every character;
  let doubledString = '';
  for (let count = 0; count < string.length; count += 1) {
    doubledString += string[count];
    doubledString += string[count];
  }
  console.log(doubledString);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""