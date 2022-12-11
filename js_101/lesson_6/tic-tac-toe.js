/* eslint-disable max-depth */
/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */

const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const OPTIMAL_SQUARE = '5';
const FIRST_MOVER_SETTING = 'choose';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();
  console.log(`Welcome to Tic-Tac-Toe. First to ${GAMES_TO_WIN} wins the match.`);
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(array, delimiter = ', ', joinWord = 'or') {
  if (array.length === 0) {
    return '';
  } else if (array.length === 1) {
    return `${array[0]}`;
  } else if (array.length === 2) {
    return `${array[0]} ${joinWord} ${array[1]}`;
  } else {
    return array.slice(0, -1).join(delimiter) + `${delimiter}${joinWord} ${array.slice(-1)}`;
  }
}

function chooseSquare(board, player) {
  if (player === 'player') playerChoosesSquare(board);
  else computerChoosesSquare(board);
}

function alternatePlayer(player) {
  if (player === 'player') return 'computer';
  else return 'player';
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("That's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let square;

  //winning move first
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  //optimal square if available
  if (!square) {
    if (emptySquares(board).includes(OPTIMAL_SQUARE)) square = OPTIMAL_SQUARE;
  }

  //defense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index += 1) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  //random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  let firstMover;

  prompt(`Welcome to Tic-Tac-Toe. First to ${GAMES_TO_WIN} wins the match.`);
  if (FIRST_MOVER_SETTING === 'choose') {
    prompt('Would you like to go first for this match? (y/n)');
    while (true) {
      let answer = readline.question().toLowerCase();
      if (answer === 'y') {
        firstMover = 'player';
        break;
      } else if (answer === 'n') {
        firstMover = 'computer';
        break;
      } else prompt('Please enter a valid response. (y/n)');
    }
  } else {
    firstMover = FIRST_MOVER_SETTING;
  }

  prompt(`For this match, ${firstMover} will go first.`);
  readline.keyInPause();

  while (true) {

    let board = initializeBoard();

    while (true) {
      let currentPlayer = firstMover;
      while (true) {
        displayBoard(board);
        chooseSquare(board, currentPlayer);
        currentPlayer = alternatePlayer(currentPlayer);
        if (someoneWon(board) || boardFull(board)) break;
      }
      break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      if (detectWinner(board) === 'Player') {
        playerScore += 1;
      } else {
        computerScore += 1;
      }
    } else {
      prompt("It's a tie!");
    }

    prompt(`Player: ${playerScore}. Computer: ${computerScore}.`);

    if (playerScore === GAMES_TO_WIN) {
      prompt('Congratulations! You have won the match.');
      break;
    } else if (computerScore === GAMES_TO_WIN) {
      prompt('The computer has won the match.');
      break;
    }

    prompt('Press [ENTER] to continue.');
    let answer = readline.question();
    if (answer) continue;
  }

  prompt('Would you like to play again? y/n');
  let answer;
  while (true) {
    answer = readline.question().toLowerCase();
    if (answer !== 'y' && answer !== 'n') prompt('Please enter a valid response. (y/n)');
    else break;
  }
  if (answer === 'n') break;
}

prompt('Thanks for playing Tic Tac Toe!');