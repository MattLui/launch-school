const str = 'launch school tech & talk';

const arr = str.split(" ");

for (var i = 0; i < arr.length; i+=1) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log(str2);