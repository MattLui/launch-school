function timeOfDay(minutesPastMidnight) {
  let hours = 0;
  let minutes = 0;
  let number = minutesPastMidnight % 1440;
  if (number < 0) {
    hours = 24 - Math.ceil(-number / 60);
    minutes = 60 + (number % 60);
  } else {
    hours += Math.floor(number / 60);
    minutes += (number % 60);
  }
  let time = padZeroes(hours) + ':' + padZeroes(minutes);
  return time;
}

function padZeroes(number) {
  let string = String(number);
  return string.length < 2 ? ('0' + string) : string;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");