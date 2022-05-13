const Turns = require('../src/Turns');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    let turn = new Turns(guess, this.currentCard);
    this.turns++
    this.currentCard = this.deck.cards[this.turns];
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.unshift(turn.card.id)
      console.log(this.incorrectGuesses)
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    } 
  }
}

module.exports = Round