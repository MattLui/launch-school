const Range = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  }
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }
  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}
Object.assign(WheeledVehicle.prototype, Range);

class Auto extends WheeledVehicle {
  constructor() {
    super([30, 30, 32, 32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    super([20, 20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}
Object.assign(Catamaran.prototype, Range);

let catty = new Catamaran(3, 6, 9, 12);
console.log(catty);
console.log(catty.range());

let moto = new Motorcycle (3, 6, 9);
console.log(moto);

let carr = new Auto (3, 6, 9);
console.log(carr);