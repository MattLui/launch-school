function letterCount(s) {
  let result = {};
  for (let index = 0; index < s.length; index += 1) {
    let char = s[index];
    if (Object.keys(result).includes(char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(letterCount('arithmetics'));