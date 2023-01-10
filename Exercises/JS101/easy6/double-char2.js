const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
  'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];


function doubleConsonants(string) {
  let doubledString = '';
  for (let count = 0; count < string.length; count += 1) {
    if (consonants.includes(string[count].toLowerCase())) {
      doubledString += string[count] + string[count];
    } else {
      doubledString += string[count];
    }
  }
  console.log(doubledString);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

