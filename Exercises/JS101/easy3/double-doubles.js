function twice(number) {
  if (number.toString().length % 2 === 0) {
    let string = number.toString();
    // eslint-disable-next-line max-len
    if (string.slice(0, (string.length / 2)) === string.slice(string.length / 2)) {
      console.log (number);
    } else {
      console.log (number * 2);
    }
  } else {
    console.log (number * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676