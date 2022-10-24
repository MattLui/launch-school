function multisum(num) {
  let answer = 0;
  for (let count = 1; count <= num; count += 1) {
    if ((count % 3 === 0) || (count % 5 === 0)) {
      answer += count;
    }
  }
  console.log(answer);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168