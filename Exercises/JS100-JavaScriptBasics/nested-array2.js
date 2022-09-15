let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = Object.fromEntries(nestedArray);
console.log(obj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }