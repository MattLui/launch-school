const readline = require('readline-sync');

console.log('Enter the length of the room in meters:');

let length = readline.prompt();

console.log('Enter the width of the room in meters:');

let width = readline.prompt();

let areaInMeters = (Number(length) * Number(width));

let areaInFeet = (areaInMeters * 10.7639);

console.log (`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet)`);
