function stringToObject (first, str2, str3, str4, last) {
  return {
    first,
    last,
    middle: [str2, str3, str4].sort()
  };
}

console.log(stringToObject(1, 2, 3, 4, 5));
