const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const ABBREVIATIONS = ['r', 'p', 'sc', 'l', 'sp'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};
const WINNING_SCORE = 3;
var playerScore = 0;
var computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

function countScore(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
  } else if (choice === computerChoice) {
    //Do nothing
  } else {
    computerScore += 1;
  }
  prompt(`You: ${playerScore}, Computer: ${computerScore}`);
}

prompt("Welcome to rock-paper-scissors-lizard-spock. It's very simple. Scissors cuts paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves spock. Spock vaporizes rock. And, as it always has, rock crushes scissors. First to three wins the match!");

let answer = [];
do {
  do {
    prompt(`'Choose one: ${VALID_CHOICES.join(', ')}`);
    prompt("You may type 'r' for rock, 'p' for paper, 'sc' for scissors, 'l' for lizard, or 'sp' for spock");
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice) && !ABBREVIATIONS.includes(choice)) {
      prompt("That's not a valid choice. Please choose again.");
      choice = readline.question();
    }

    if (ABBREVIATIONS.includes(choice)) {
      switch (choice) {
        case 'r':
          choice = 'rock';
          break;
        case 'p':
          choice = 'paper';
          break;
        case 'sc':
          choice = 'scissors';
          break;
        case 'l':
          choice = 'lizard';
          break;
        case "sp":
          choice = 'spock';
          break;
      }
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);
    countScore (choice, computerChoice);
  } while ((playerScore) < WINNING_SCORE && (computerScore < WINNING_SCORE));

  prompt('Match over! Would you like to play again? (y/n)');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'y') {
    computerScore = 0;
    playerScore = 0;
  }
} while (answer[0] !== 'n');