const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

function afterMidnight(time) {
  let timeArray = time.split(':');
  let hours = Number(timeArray[0]);
  let minutes = Number(timeArray[1]);
  let minutesAfterMidnight = ((hours % HOURS_IN_DAY) * MINUTES_IN_HOUR)
    + minutes;
  return minutesAfterMidnight;
}

function beforeMidnight(time) {
  let timeArray = time.split(':');
  let hours = Number(timeArray[0]);
  let minutes = Number(timeArray[1]);
  let minutesBeforeMidnight = ((((HOURS_IN_DAY - hours) % HOURS_IN_DAY)
    * MINUTES_IN_HOUR) - minutes);
  return minutesBeforeMidnight;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);