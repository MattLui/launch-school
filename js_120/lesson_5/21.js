/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
let shuffle = require('shuffle-array');
let readline = require('readline-sync');

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suits = ['h', 'd', 'c', 's'];

    for (let rank of ranks) {
      for (let suit of suits) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }

  shuffle() {
    shuffle(this.cards);
  }

  dealCard() {
    return this.cards.pop();
  }
}

class Hand {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  getTotal() {
    let sum = 0;
    let aces = 0;
    for (let card of this.cards) {
      const value = card.rank;
      if (value === 'A') {
        aces += 1;
        sum += 11;
      } else if (['T', 'J', 'Q', 'K'].includes(value)) {
        sum += 10;
      } else {
        sum += Number(value);
      }
    }

    while (aces > 0 && sum > TwentyOneGame.TARGET_TOTAL) {
      sum -= 10;
      aces -= 1;
    }

    return sum;
  }

  toString() {
    return this.cards.map(card => `${card.rank}`).join(' ');
  }

  isBusted() {
    return this.getTotal() > TwentyOneGame.TARGET_TOTAL;
  }
}

class Player {
  constructor() {
    this.hand = new Hand();
    this.money = TwentyOneGame.STARTING_BANKROLL;
  }

  hit(deck) {
    this.hand.addCard(deck.dealCard());
  }

  getHand() {
    return this.hand.toString();
  }

  getTotal() {
    return this.hand.getTotal();
  }

  isBusted() {
    return this.hand.isBusted();
  }
}

class Dealer extends Player {
  constructor() {
    super ();
    this.showingCard = null;
  }

  showCard() {
    this.showingCard = this.hand.cards[0].rank;
  }

  shouldHit() {
    return this.getTotal() < TwentyOneGame.DEALER_STANDS_AT;
  }
}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  static STAKES = 1;
  static STARTING_BANKROLL = 5;
  static TARGET_BANKROLL = 10;
  static TARGET_TOTAL = 21;
  static DEALER_STANDS_AT = 17;

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.playOneGame();
      if (this.matchOver()) {
        console.log(this.matchOver());
        break;
      } else if (!this.playAgain()) break;
      console.log("Let's play again!");
      console.log(`Your current bankroll is: $${this.player.money}.`);
      console.log("");
    }

    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.deck = new Deck();
    this.player.hand = new Hand();
    this.dealer.hand = new Hand();
    this.deck.shuffle();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    if (!this.player.isBusted()) {
      this.dealerTurn();
    }
    this.displayResult();
    this.updateBankroll();
  }

  dealCards() {
    this.player.hand.addCard(this.deck.dealCard());
    this.dealer.hand.addCard(this.deck.dealCard());
    this.player.hand.addCard(this.deck.dealCard());
    this.dealer.hand.addCard(this.deck.dealCard());
  }

  showCards() {
    this.dealer.showCard();
    console.log(`The dealer has ${this.dealer.showingCard} and ?`);
    this.displayHandAndTotal(this.player);
  }

  playerTurn() {
    while (true) {
      let answer;
      while (true) {
        console.log('Hit or stay? (h or s)');
        answer = readline.question().toLowerCase();
        if (['h', 's'].includes(answer)) break;
        console.log("Please enter 'h' or 's'.");
      }

      if (answer === 'h') {
        this.player.hit(this.deck);
        this.displayHandAndTotal(this.player);
      }

      if (this.player.isBusted() || answer === 's') break;
    }

    if (this.player.isBusted()) {
      this.displayBustedMessage(this.player);
    }
  }

  dealerTurn() {
    this.displayHandAndTotal(this.dealer);

    if (!this.dealer.shouldHit()) {
      console.log(`The dealer stands at ${this.dealer.getTotal()}.`);
    } else {
      console.log(`The dealer hits until reaching ${TwentyOneGame.DEALER_STANDS_AT} or busting...`);
      while (this.dealer.shouldHit()) {
        this.dealer.hit(this.deck);
      }

      this.displayHandAndTotal(this.dealer);

      if (this.dealer.isBusted()) {
        this.displayBustedMessage(this.dealer);
      }
    }
  }

  displayHandAndTotal(player) {
    if (player === this.dealer) {
      console.log(`The dealer's cards are: ${player.getHand()}`);
      console.log(`The dealer's total is: ${player.getTotal()}`);
    } else {
      console.log(`Your cards are: ${player.getHand()}`);
      console.log(`Your total is: ${player.getTotal()}`);
    }
  }

  displayBustedMessage(player) {
    console.log(player === this.player ? "Player busted." : "Dealer busted.");
  }

  displayWelcomeMessage() {
    console.clear();
    console.log(`Welcome to Twenty-One. The first player to reach ${TwentyOneGame.TARGET_TOTAL} without busting wins.`);
    console.log(`You start with $${TwentyOneGame.STARTING_BANKROLL}. Each game, you can win or lose $${TwentyOneGame.STAKES}.`);
    console.log(`Keep playing until you are broke ($0) or rich ($${TwentyOneGame.TARGET_BANKROLL})!`);
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thank you for playing Twenty-One. Goodbye.");
  }

  winnerIs() {
    if (this.player.isBusted()) {
      return this.dealer;
    } else if (this.dealer.isBusted()) {
      return this.player;
    } else if (this.player.getTotal() > this.dealer.getTotal()) {
      return this.player;
    } else if (this.dealer.getTotal() > this.player.getTotal()) {
      return this.dealer;
    } else {
      return null;
    }
  }

  displayResult() {
    if (this.winnerIs() === this.player) {
      console.log("Player wins.");
    } else if (this.winnerIs() === this.dealer) {
      console.log("Dealer wins.");
    } else {
      console.log("It's a push.");
    }
  }

  updateBankroll() {
    if (this.winnerIs() === this.player) {
      this.player.money += TwentyOneGame.STAKES;
      console.log(`You won $${TwentyOneGame.STAKES}.`);
    } else if (this.winnerIs() === this.dealer) {
      this.player.money -= TwentyOneGame.STAKES;
      console.log(`You lost $${TwentyOneGame.STAKES}.`);
    }
    console.log(`You have $${this.player.money}.`);
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

  matchOver() {
    if (this.player.money === TwentyOneGame.TARGET_BANKROLL) {
      return "Congratulations, you win the match. You're rich!";
    } else if (this.player.money === 0) {
      return "Sorry, you have no money left and lose the match.";
    } else {
      return null;
    }
  }
}

let game = new TwentyOneGame();
game.play();