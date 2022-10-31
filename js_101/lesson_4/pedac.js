/* 2
4 6
8 10 12
14 16 18 20 */

function sumOfRow (numOfRows) {
  let rowSum = 0;
  let rowLength = 0;
  let currentNumber = 0;
  for (let counter = 1; counter <= numOfRows; counter += 1) {
    rowSum = 0;
    rowLength += 1;
    for (let counter = 1; counter <= rowLength; counter += 1) {
      currentNumber += 2;
      rowSum += currentNumber;
    }
  }
  console.log(rowSum);
}

sumOfRow(1);
sumOfRow(2);
sumOfRow(3);
sumOfRow(4);