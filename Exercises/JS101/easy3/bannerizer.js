function logInBox(string) {
  let length = (string.length + 2);
  let top = '+';
  let upper = '|';
  let middle = `| ${string} |`;
  for (let count = 0; count < length; count += 1) {
    top += '-';
    upper += ' ';
  }
  top += '+';
  upper += '|';
  console.log(top);
  console.log(upper);
  console.log(middle);
  console.log(upper);
  console.log(top);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');