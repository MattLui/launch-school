function scramble(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for (let index = 0; index < arr2.length; index += 1) {
    if (arr1.includes(arr2[index])) {
      arr1.splice(arr1.indexOf(arr2[index]), 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble('scriptingjava',     'javascript' ));