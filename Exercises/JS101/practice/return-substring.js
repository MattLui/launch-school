function solution(fullText, searchText) {
  let length = searchText.length;
  let count = 0;
  for (let index = 0; index + length - 1 < fullText.length; index += 1) {
    if (fullText.slice(index, index + length) === searchText) {
      count += 1;
    }
  }
  return count;
}

console.log(solution('aa_bb_cc_dd_bb_e', 'bb'));
console.log(solution('aaabbbbcccc', 'bbb'));


