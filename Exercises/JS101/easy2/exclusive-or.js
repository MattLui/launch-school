function xor (arg1, arg2) {
  if (arg1 && arg2) {
    return false;
  } else if (!arg1 && !arg2) {
    return false;
  } else {
    return true;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);