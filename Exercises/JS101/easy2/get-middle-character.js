function centerOf(str) {
  if (str.length % 2 === 0) {
    let middleTwo = '';
    middleTwo += str[(str.length / 2) - 1];
    middleTwo += str[(str.length / 2)];
    return middleTwo;
  } else {
    let middle = '';
    middle += str[((str.length - 1) / 2)];
    return middle;
  }
}

console.log(
  centerOf('I Love JavaScript'), // "a"
  centerOf('Launch School'),     // " "
  centerOf('Launch'),            // "un"
  centerOf('Launchschool'),      // "hs"
  centerOf('x'),                 // "x"
);