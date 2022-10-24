function century(year) {
  let centuryNumber = Math.ceil(year / 100);
  let centuryName = '';
  if (centuryNumber.toString().slice(-2) === '11' || centuryNumber.toString().slice(-1) === '0' || centuryNumber.toString().slice(-2) === '12') {
    centuryName = centuryNumber + 'th';
  } else if (centuryNumber.toString().slice(-1) === '1') {
    centuryName = centuryNumber + 'st';
  } else if (centuryNumber.toString().slice(-1) === '3') {
    centuryName = centuryNumber + 'rd';
  } else {
    centuryName = centuryNumber + 'nd';
  }
  console.log(centuryName);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"