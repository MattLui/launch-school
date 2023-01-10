function swapName(name) {
  let nameArray = name.split(' ');
  console.log(nameArray.reverse().join(', '));
}

swapName('Joe Roberts');    // "Roberts, Joe"