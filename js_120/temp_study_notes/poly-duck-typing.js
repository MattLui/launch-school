class Violinist {
  practice() {
    console.log("playing violin");
  }
}

class BasketballPlayer {
  practice() {
    console.log("shooting hoops");
  }
}

class Doctor {
  practice() {
    console.log("practicing medicine");
  }
}

let group = [new Violinist(), new BasketballPlayer(), new Doctor()];
group.forEach(individual => individual.practice());