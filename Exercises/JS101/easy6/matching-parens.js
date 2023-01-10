function isBalanced (string) {
  let array = string.split('');
  let numParens = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === "(") {
      numParens += 1;
    } else if (array[index] === ")") {
      numParens -= 1;
    }
    if (numParens < 0) break;
  }
  return numParens === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);