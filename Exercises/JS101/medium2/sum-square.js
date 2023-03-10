function sumSquare (num) {
  let answer = 0;
  while (num > 0) {
    answer += num;
    num -= 1;
  }
  return (answer * answer);
}

function squareSum (num) {
  let answer = 0;
  while (num > 0) {
    answer += (num * num);
    num -= 1;
  }
  return answer;
}

function sumSquareDifference(count) {
  return sumSquare(count) - squareSum(count);
}

console.log(
  sumSquareDifference(3),
  sumSquareDifference(10),
  sumSquareDifference(1),
  sumSquareDifference(100)
);