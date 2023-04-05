class Chef {
  prepare(wedding) {
    this.prepareFood(wedding.guests);
  }
  prepareFood(guests) {
    console.log(guests);
  }
}

class Decorator {
  prepare(wedding) {
    this.decoratePlace(wedding.flowers);
  }
  decoratePlace(flowers) {
    console.log(flowers);
  }
}

class Musician {
  prepare(wedding) {
    this.preparePerformance(wedding.songs);
  }
  preparePerformance(songs) {
    console.log(songs);
  }
}

class Wedding {
  constructor (guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }
  prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare(this);
    });
  }
}

let wed = new Wedding(3, 'lilies', 'hello');
console.log(wed);
let preparers = [new Chef(), new Decorator(), new Musician()];
wed.prepare(preparers);