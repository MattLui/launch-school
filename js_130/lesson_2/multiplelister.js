function makeMultipleLister(number) {
  let num = number;
  let currentNum = number;
  return function() {
    while (currentNum < 100) {
      console.log(currentNum);
      currentNum += num;
    }
  };
}

let lister = makeMultipleLister(17);
lister();