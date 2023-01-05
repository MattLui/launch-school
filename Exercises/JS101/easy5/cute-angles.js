function dms(angle) {
  let degrees = padZeroes(Math.floor(angle));
  let minutes = padZeroes(Math.floor((angle - degrees) * 60));
  let seconds = padZeroes(Math.floor(
    (((angle - degrees) * 60) - minutes) * 60));
  console.log(`${degrees}\u00B0${minutes}'${seconds}"`);
}

function padZeroes(number) {
  let string = String(number);
  return string.length < 2 ? ('0' + string) : string;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"