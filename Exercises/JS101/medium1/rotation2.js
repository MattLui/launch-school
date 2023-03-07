function rotateRightmostDigits(number, count) {
  let string = number.toString();
  let leftHalf = string.slice(0, (string.length - count));
  let rightHalf = string.slice(-count);
  let rotatedRightHalf = rightHalf.slice(1).concat(rightHalf[0]);
  let result = Number(leftHalf + rotatedRightHalf);
  return result;
}

console.log(
  rotateRightmostDigits(735291, 1),      // 735291
  rotateRightmostDigits(735291, 2),      // 735219
  rotateRightmostDigits(735291, 3),      // 735912
  rotateRightmostDigits(735291, 4),      // 732915
  rotateRightmostDigits(735291, 5),      // 752913
  rotateRightmostDigits(735291, 6));      // 352917