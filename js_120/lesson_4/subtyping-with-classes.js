class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    //rules of play
  }
  play() {
    return 'test';
  }
}

let game = new Bingo();
console.log(game.play());

class Greeting {
  greet(string) {
    console.log(string);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("hello");
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("goodbye");
  }
}

let hello = new Hello();
hello.hi();

let goodbye = new Goodbye();
goodbye.bye();