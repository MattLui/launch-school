function featured (number) {
  if (number >= 9876543201) {
    return 'There is no possible number that fulfills those requirements';
  } else {
    while (true) {
      number += 1;
      if (isFeatured(number)) {
        break;
      }
    }
    return number;
  }
}

function isFeatured (number) {
  if (number % 2 === 0) {
    return false;
  } else if (number % 7 !== 0) {
    return false;
  } else if (hasDuplicateDigit(number)) {
    return false;
  } else {
    return true;
  }
}

function hasDuplicateDigit(number) {
  let numArray = number.toString().split('');
  let test = false;
  numArray.forEach(num => {
    if (numArray.filter(element => element === num).length > 1) test = true;
  });
  return test;
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));
