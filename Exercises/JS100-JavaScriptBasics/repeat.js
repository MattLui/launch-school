function repeat(num, str) {
  let result = '';
  while (num > 0) {
    result += str;
    num -= 1;
  }
  return result;
}

console.log(repeat(3, 'ha'));