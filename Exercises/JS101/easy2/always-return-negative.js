function negative(num) {
  if (num >= 0) {
    return num * -1;
  } else {
    return num;
  }
}

console.log(negative(5), negative(-3), negative(0));