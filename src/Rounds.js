const Turns = require('../src/Turns');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  takeTurn(guess) {
    this.turns++
    let turn = new Turns(guess, this.returnCurrentCard());
    return turn

  }
}

module.exports = Round