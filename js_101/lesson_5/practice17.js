function uuid() {
  let alphaNumeric = '123456789abcdef';
  let id = [];
  for (let counter = 0; counter < 32; counter += 1) {
    id.push(alphaNumeric[(Math.floor(Math.random() * alphaNumeric.length))]);
  }
  let uuid = id.join('');
  let uuidWithDashes = uuid.slice(0,8) + '-' + uuid.slice(8,12) + '-' + uuid.slice(12,16) + '-' + uuid.slice(16,20) + '-' + uuid.slice(-12);
  return uuidWithDashes;
}

console.log(uuid());