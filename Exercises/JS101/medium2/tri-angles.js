function triangle (angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 !== 180) {
    return 'invalid';
  } else if (!(angle1 > 0 && angle2 > 0 && angle3 > 0)) {
    return 'invalid';
  } else if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'right';
  } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(
  triangle(60, 70, 50),
  triangle(30, 90, 60),
  triangle(120, 50, 10),
  triangle(0, 90, 90),
  triangle(50, 50, 50)
);