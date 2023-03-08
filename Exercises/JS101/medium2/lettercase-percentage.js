/*
Algo
- Search the string for uppercase letters and store the length of that result
- Do the same for lowercase and other
- Use interpolation to output the desired message
*/

function letterPercentages(string) {
  let lowerCount = (string.match(/[a-z]/g) || []).length;
  let upperCount = (string.match(/[A-Z]/g) || []).length;
  let neither = (string.match(/[^a-zA-Z]/g) || []).length;
  let lowerPercentage = (100 * lowerCount / string.length).toFixed(2);
  let upperPercentage = (100 * upperCount / string.length).toFixed(2);
  let neitherPercentage = (100 * neither / string.length).toFixed(2);
  console.log(`{ lowercase: "${lowerPercentage}", uppercase "${upperPercentage}", 
    neither: "${neitherPercentage}" }`);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }