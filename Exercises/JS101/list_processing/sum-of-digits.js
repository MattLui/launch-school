function sum (num) {
  let array = num.toString().split('');
  console.log(array.reduce((accumulator, element) =>
    accumulator + Number(element), 0));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45