/* eslint-disable max-len */
/* eslint-disable space-unary-ops */
let readline = require("readline-sync");

class Square {
  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = new Square();
    }
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.isUnusedSquare(key));
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.firstPlayer = this.human;
  }

  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  static OPTIMAL_SQUARE = 5;
  static MATCH_GOAL = 3;

  static joinOr(choices, separator = ', ', conjunction = 'or') {
    if (choices.length === 1) {
      return choices[0].toString();
    }  else if (choices.length === 2) {
      return `${choices[0]} ${conjunction} ${choices[1]}`;
    } else {
      let lastChoice = choices[choices.length - 1];
      let result = choices.slice(0, -1).join(separator);
      return `${result}${separator}${conjunction} ${lastChoice}`;
    }
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.playOneGame();
      if (this.matchOver()) {
        console.log(this.matchOver());
        break;
      } else if (!this.playAgain()) break;
      console.log("Let's play again!");
      this.firstPlayer = this.togglePlayer(this.firstPlayer);
    }

    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.board.reset();
    this.board.display();

    let currentPlayer = this.firstPlayer;
    while (true) {
      this.playerMoves(currentPlayer);
      if (this.gameOver()) break;

      this.board.displayWithClear();
      currentPlayer = this.togglePlayer(currentPlayer);
    }

    this.board.displayWithClear();
    this.displayResults();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
    console.log(`First player to win ${TTTGame.MATCH_GOAL} games wins the match.`);
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
      this.human.score++;
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
      this.computer.score++;
    } else {
      console.log("A tie game. How boring.");
    }
    console.log(`Human: ${this.human.score}. Computer: ${this.computer.score}.`);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  playerMoves(player) {
    return player === this.human ? this.humanMoves() : this.computerMoves();
  }

  togglePlayer(player) {
    return player === this.human ? this.computer : this.human;
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");

    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = this.offensiveComputerMove();

    if (!choice) choice = this.defensiveComputerMove();

    if (!choice && this.board.isUnusedSquare(TTTGame.OPTIMAL_SQUARE)) choice = TTTGame.OPTIMAL_SQUARE;

    if (!choice) {
      let validChoices = this.board.unusedSquares();

      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  offensiveComputerMove() {
    return this.findCriticalSquare(this.computer);
  }

  defensiveComputerMove() {
    return this.findCriticalSquare(this.human);
  }

  findCriticalSquare(player) {
    for (let index = 0; index < TTTGame.POSSIBLE_WINNING_ROWS.length; index++) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[index];
      let key = this.criticalSquare(row, player);
      if (key) return key;
    }
    return null;
  }

  criticalSquare(row, player) {
    if (this.board.countMarkersFor(player, row) === 2) {
      let index = row.findIndex(key => this.board.isUnusedSquare(key));
      if (index >= 0) return row[index];
    }

    return null;
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  matchOver() {
    if (this.human.score === TTTGame.MATCH_GOAL) {
      return "Congratulations, you win the match!";
    } else if (this.computer.score === TTTGame.MATCH_GOAL) {
      return "I win the match! Score one for the machines!";
    } else {
      return null;
    }
  }

  playAgain() {
    let response;
    while (true) {
      response = readline.question("Play again? (y/n): ").toLowerCase();

      if (response === 'y') {
        console.clear();
        return true;
      } else if (response === 'n') {
        return false;
      } else {
        console.log("Sorry, that's not a valid choice.");
        console.log("");
      }
    }
  }
}

let game = new TTTGame();
game.play();