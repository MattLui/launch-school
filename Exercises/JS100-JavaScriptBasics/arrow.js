const template = 'I VERB NOUN.';

const sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);

console.log(sentence('like', 'birds'));