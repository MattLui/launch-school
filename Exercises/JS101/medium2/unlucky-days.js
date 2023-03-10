/*
Algo:
  Iterate over all the months of the given year.
  For each month, get the day that falls on the 13th.
  Count the 13ths that fall on a Friday.
  Return the count.
*/

function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    console.log(date);
    if (date.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));