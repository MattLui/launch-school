function wordSizes(string) {
  let object = {};
  let wordArray = string.replace(/[^a-z ]/gi, '').split(' ');
  if (wordArray[0].length !== 0) {
    wordArray.forEach(element => {
      if (object[element.length] > 0) {
        object[element.length] += 1;
      } else {
        object[element.length] = 1;
      }
    });
  }
  return object;
}

console.log(
  wordSizes('Four score and seven.'),                       // { "3": 1, "4": 1, "5": 2 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 3 }
  wordSizes("What's up doc?"),                              // { "2": 1, "3": 1, "5": 1 }
  wordSizes(''));                                            // {}
