let statement = "The Flintstones Rock";

function letterFrequency (string) {
  let chars = string.split("").filter (char => char !== ' ');
  let result = {};
  chars.forEach(char => {
    if (Object.keys(result).includes(char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });
  return result;
}

console.log(letterFrequency(statement));