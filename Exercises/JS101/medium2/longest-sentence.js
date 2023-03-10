/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/*
Algo
  - Iterate through the string one character at a time
  - When you reach a character that is ? . or ! store the string up to that point in a new array
  - Save the remaining string as the new string to repeat this process with
  - If the string length is zero, stop this process
  - Iterate through the array
  - Store the length of each sentence
  - Save the first length as the maximum
  - For each sentence, if it is longer, store that length as the new maximum
  - And store the sentence as the maximum sentence
  - Output the maximum sentence and maximum sentence length
*/

function longestSentence (text) {
  let sentenceArray = [];
  let marker = 0;
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '?' || text[index] === '.' || text[index] === '!') {
      sentenceArray.push(text.slice(marker, index + 1));
      marker = index + 2;
    }
  }
  let maximumLength = 0;
  let maximumSentence = '';
  sentenceArray.forEach (sentence => {
    let wordArray = sentence.split(' ');
    if (wordArray.length > maximumLength) {
      maximumLength = wordArray.length;
      maximumSentence = sentence;
    }
  });
  console.log(maximumSentence);
  console.log(`The longest sentence has ${maximumLength} words.`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.