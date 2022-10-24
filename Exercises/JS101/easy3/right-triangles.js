function triangle(number) {
  for (let line = 1; line <= number; line += 1) {
    console.log(' '.repeat(number - line) + '*'.repeat(line));
  }
}

triangle(5);
triangle(9);