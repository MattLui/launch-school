function calculateBMI(heightInCm, weightInKilograms) {
  return ((weightInKilograms / ((heightInCm/100)**2))).toFixed(2);
}
console.log(calculateBMI(180, 80));