let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (i = 0; i < vocabulary.length; i+=1) {
  for (k = 0; k < vocabulary[i].length; k+= 1) {
    console.log(vocabulary[i][k]);
  }
}