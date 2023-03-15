/* eslint-disable max-lines-per-function */
function isPangram (string) {
  let alphabet = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  };
  string = string.toLowerCase();
  for (let index = 0; index < string.length; index += 1) {
    if (Object.keys(alphabet).includes(string[index])) {
      alphabet[string[index]] += 1;
    }
  }
  return (Object.values(alphabet).indexOf(0)) === -1;
}

let string = "abcdefghijklmnopqrstuvwxy";

console.log(isPangram(string));