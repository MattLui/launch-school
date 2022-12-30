/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');
const GAMES_TO_WIN = 3;
const TARGET_TOTAL = 21;
const DEALER_STANDS_AT = 17;
let playerScore = 0;
let dealerScore = 0;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

//Initialize deck
let suits = ['S', 'H', 'D', 'C'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
let deck = [];
let suit = 0;
let rank = 0;

for (let counter = 0; counter < 52; counter += 1) {
  deck[counter] = [suits[suit], ranks[rank]];
  if (ranks[rank] === 'A') {
    suit += 1;
    rank = 0;
  } else rank += 1;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function total(cards) {
  let values = cards.map(card => card[1]);
  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['T', 'J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > TARGET_TOTAL) sum -= 10;
  });

  return sum;
}

function busted(total) {
  return total > TARGET_TOTAL;
}

function playAgain() {
  console.log('-------------');
  prompt('Would you like to play again? y/n');
  let answer;
  while (true) {
    answer = readline.question().toLowerCase();
    if (answer !== 'y' && answer !== 'n') prompt('Please enter a valid response. (y/n)');
    else return answer;
  }
}

function hand(cards) {
  return cards.map(card => `${card[1]}`).join(' ');
}

function displayScore() {
  prompt(`Player's score: ${playerScore}`);
  prompt(`Dealer's score: ${dealerScore}`);
}

//Main game loop
while (true) {
  playerScore = 0;
  dealerScore = 0;
  prompt(`Welcome to ${TARGET_TOTAL}!`);
  prompt(`The goal is to try to get as close to ${TARGET_TOTAL} as possible without busting.`);
  prompt(`The dealer will stand at ${DEALER_STANDS_AT} or above.`);
  prompt(`First to win ${GAMES_TO_WIN} games wins the match. Press [ENTER] to begin.`);
  readline.question();
  playRound();
  if (playAgain() === "n") break;
}

function playRound() {
  while (true) {
    console.clear();
    shuffle(deck);

    //Deal cards to player and dealer
    let playerHand = [deck.pop(), deck.pop()];
    let dealerHand = [deck.pop(), deck.pop()];
    let playerTotal = total(playerHand);
    let dealerTotal = total(dealerHand);
    prompt(`Dealer has ${dealerHand[0][1]} and ?`);
    prompt(`Player has ${playerHand[0][1]} and ${playerHand[1][1]}`);
    prompt(`Player total: ${playerTotal}`);

    /*Player turn: hit or stay
      - repeat until bust or stay*/
    while (true) {
      let answer;
      while (true) {
        prompt('Hit or stay? (h or s)');
        answer = readline.question().toLowerCase();
        if (['h', 's'].includes(answer)) break;
        prompt("Please enter 'h' or 's'.");
      }

      if (answer === 'h') {
        playerHand.push(deck.pop());
        playerTotal = total(playerHand);
        prompt(`Player is dealt ${playerHand[playerHand.length - 1][1]}. Player total: ${playerTotal}`);
      }

      if (busted(playerTotal) || answer === 's') break;
    }

    //If player busts, dealer wins.
    if (busted(playerTotal)) {
      prompt('You busted! Dealer wins.');
      dealerScore += 1;
    } else {
      prompt("You chose to stay!");

      /*Dealer turn: hit or stay
      - repeat until total >= DEALER_STANDS_AT*/
      prompt(`Dealer's cards are revealed. Dealer has ${hand(dealerHand)}.`);
      while (true) {
        if (busted(dealerTotal) || dealerTotal >= DEALER_STANDS_AT) break;
        dealerHand.push(deck.pop());
        dealerTotal = total(dealerHand);
        prompt(`Dealer hits: ${dealerHand[dealerHand.length - 1][1]}`);
      }

      //If dealer busts, player wins.
      if (busted(dealerTotal)) {
        prompt(`Dealer has ${dealerTotal} and busts! You win.`);
        playerScore += 1;
      } else {
        prompt(`Dealer stays at ${dealerTotal}.`);
      }
    }

    //Compare cards and declare winner.
    if (!(busted(playerTotal) || busted(dealerTotal))) {
      prompt(`Dealer's total: ${dealerTotal}`);
      prompt(`Player's total: ${playerTotal}`);
      if (playerTotal > dealerTotal) {
        prompt('You win!');
        playerScore += 1;
      } else if (playerTotal < dealerTotal) {
        prompt('Dealer wins.');
        dealerScore += 1;
      } else {
        prompt ("It's a push.");
      }
    }

    displayScore();
    if (playerScore === GAMES_TO_WIN) {
      prompt('Congraulations. You won the match!');
      break;
    } else if (dealerScore === GAMES_TO_WIN) {
      prompt('The dealer wins the match.');
      break;
    }
    prompt('Press [ENTER] to continue.');
    readline.question();
  }
}