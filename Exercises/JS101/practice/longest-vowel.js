const VOWELS = ['a', 'e', 'i', 'o', 'u'];
function solve (string) {
  let count = 0;
  let maximum = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (VOWELS.includes(string[index])) {
      count += 1;
    } else {
      count = 0;
    }
    if (count > maximum) {
      maximum = count;
    }
  }
  return maximum;
}

console.log(solve('codewarriors'));