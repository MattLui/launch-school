const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

//1. Initialize deck
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
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(hand) {
  return total(hand) > 21;
}

function playAgain() {
  console.log('-------------');
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question();
  return answer.toLowerCase(0)[0] === 'y';
}

while (true) {
  prompt('Welcome to Twenty-One!');

  shuffle(deck);

  //2. Deal cards to player and dealer
  let playerHand = [deck.pop(), deck.pop()];
  let dealerHand = [deck.pop(), deck.pop()];
  prompt(`Dealer has ${dealerHand[0][1]} and ?`);
  prompt(`Player has ${playerHand[0][1]} and ${playerHand[1][1]}`);
  prompt(`Player total: ${total(playerHand)}`);

  /*3. Player turn: hit or stay
    - repeat until bust or stay*/
  while (true) {
    prompt('Hit or stay?');
    let answer = readline.question();
    if (answer === 'stay' || busted(playerHand)) break;

    playerHand.push(deck.pop());
    console.log(`Player is dealt ${playerHand[playerHand.length - 1][1]}. Player total: ${total(playerHand)}`);
    if (busted(playerHand)) break;
  }

  //4. If player busts, dealer wins.
  if (busted(playerHand)) {
    console.log('You busted! Dealer wins.');
  } else {
    console.log("You chose to stay!");

    /*5. Dealer turn: hit or stay
    - repeat until total >= 17*/
    console.log(`Dealer's cards are revealed. Dealer has ${dealerHand[0][1]} and ${dealerHand[1][1]}`);
    while (true) {
      if (busted(dealerHand) || total(dealerHand) >= 17) break;
      dealerHand.push(deck.pop());
      console.log(`Dealer hits: ${dealerHand[dealerHand.length - 1][1]}.`);
    }

    //6. If dealer busts, player wins.
    if (busted(dealerHand)) {
      console.log(`Dealer has ${total(dealerHand)} and busts! You win.`);
    } else {
      console.log(`Dealer stays at ${total(dealerHand)}.`);
    }
  }

  //7. Compare cards and declare winner.
  if (!(busted(playerHand) || busted(dealerHand))) {
    prompt(`Dealer's total: ${total(dealerHand)}`);
    prompt(`Player's total: ${total(playerHand)}`);
    if (total(playerHand) > total(dealerHand)) {
      prompt('You win!');
    } else if (total(playerHand) < total(dealerHand)) {
      prompt('Dealer wins.');
    } else {
      prompt ("It's a push!");
    }
  }
  if (!playAgain()) break;
}