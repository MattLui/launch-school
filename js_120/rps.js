/* eslint-disable max-depth */
/* eslint-disable max-statements */
/* eslint-disable complexity */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
let readline = require('readline-sync');
const WINNING_SCORE = 5;
const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    weights: {
      rock: 1,
      paper: 1,
      scissors: 1,
      lizard: 1,
      spock: 1
    },
    choose() {
      let totalWeight = 0;
      for (let move in this.weights) {
        totalWeight += this.weights[move];
      }
      let randomNum = Math.random() * totalWeight;
      let moveChoice;
      for (let move in this.weights) {
        randomNum -= this.weights[move];
        if (randomNum <= 0) {
          moveChoice = move;
          break;
        }
      }
      this.move = moveChoice;
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log('Please choose rock, paper, scissors, lizard, or spock:');
        choice = readline.question();
        if (CHOICES.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }
      this.move = choice;
    },
  };
  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log(`Welcome to Rock, Paper, Scissors, Lizard, Spock! \n First to ${WINNING_SCORE} wins.`);
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if (WINNING_COMBOS[humanMove].includes(computerMove)) {
      this.humanScore += 1;
      console.log('You win!');
    } else if (humanMove === computerMove) {
      console.log("It's a tie!");
    } else {
      this.computerScore += 1;
      console.log('Computer wins!');
    }
  },

  displayScore() {
    console.log(`Your score: ${this.humanScore}. Computer's score: ${this.computerScore}`);
    if (this.humanScore >= WINNING_SCORE) {
      console.log ("You win the match!");
    } else if (this.computerScore >= WINNING_SCORE) {
      console.log ("Computer wins the match.");
    }
  },

  displayHistory() {
    console.log("Enter 'h' to display history. Otherwise, press [ENTER] to continue.");
    let answer = readline.question();
    if (answer.toLowerCase() === 'h') {
      console.log('Log of moves [human move, computer move]:');
      console.log (this.gameLog);
    } else {
      console.clear();
    }
  },

  play() {
    this.displayWelcomeMessage();
    this.gameLog = [];
    while (true) {
      this.computerScore = 0;
      this.humanScore = 0;
      while (this.computerScore < WINNING_SCORE && this.humanScore < WINNING_SCORE) {
        this.human.choose();
        let humanMove = this.human.move;
        let weights = this.computer.weights;
        //console.log(weights); //include this to display computer weights for testing purposes
        for (let move in weights) {
          let factor = 1;
          let moveCount = 0;
          let moveWins = 0;
          for (let index = 0; index < this.gameLog.length; index += 1) {
            let pastHumanMove = this.gameLog[index][0];
            let pastComputerMove = this.gameLog[index][1];
            if (pastComputerMove === move && (pastComputerMove !== pastHumanMove)) {
              moveCount += 1;
              if (WINNING_COMBOS[move].includes(pastHumanMove)) {
                moveWins += 1;
              }
            }
          }
          let winPercentage = moveWins / moveCount;
          //console.log(`Computer's win percentage of ${move} = ${winPercentage}.`); //include this to display the win percentages of each of computer's move for testing purposes
          if (winPercentage > 0.6) {
            factor = 1.5;
          } else if (winPercentage > 0.5) {
            factor = 1.2;
          } else if (winPercentage < 0.4) {
            factor = 0.5;
          } else if (winPercentage < 0.5) {
            factor = 0.8;
          }
          weights[move] = factor;
        }
        this.computer.choose();
        this.gameLog.push([humanMove, this.computer.move]);
        this.displayWinner();
        this.displayScore();
        this.displayHistory();
      }
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  }
};

RPSGame.play();