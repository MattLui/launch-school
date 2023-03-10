/* eslint-disable radix */
function solve(str) {
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (parseInt(str[index]) % 2 !== 0) {
      count += (index + 1);
    }
  }
  return count;
}


console.log(solve("1357"));