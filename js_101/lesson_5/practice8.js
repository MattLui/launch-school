let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(item => {
  item.forEach(word => {
    word.split('').forEach(letter => {
      if (/[aeiou]/.test(letter)) {
        console.log(letter);
      }
    });
  });
});