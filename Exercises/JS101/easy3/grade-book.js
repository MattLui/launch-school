function getGrade(score1, score2, score3) {
  let score = ((score1 + score2 + score3) / 3);
  if (90 <= score && score <= 100) {
    return 'A';
  } else if (80 <= score && score < 90) {
    return 'B';
  } else if (70 <= score && score < 80) {
    return 'C';
  } else if (60 <= score && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));