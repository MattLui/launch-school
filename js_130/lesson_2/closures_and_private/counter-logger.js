function makeCounterLogger(num) {
  return (num2) => {
    if (num > num2) {
      for (let count = num; count >= num2; count -= 1) {
        console.log(count);
      }
    } else {
      for (let count = num; count <= num2; count += 1) {
        console.log(count);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);

countlog(2);
