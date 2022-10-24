function stringy(integer) {
  let newString = "";
  for (let count = 0; count < integer; count += 1) {
    if (count % 2 === 0) {
      newString += "1";
    } else {
      newString += "0";
    }
  }
  console.log(newString);
}
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"