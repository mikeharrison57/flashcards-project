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
    // console.log('DECK', this.deck)
    // console.log('DECK.CARDS', this.deck.cards)
    // console.log('CURRENTCARD', this.currentCard)
    let turn = new Turns(guess, this.currentCard);
    this.turns++
    this.currentCard = this.deck.cards[this.turns];
    console.log(turn, 'line 16, round file')
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.unshift(turn.card.id)
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
    // turn.giveFeedback();
    // return turn
  }
}

module.exports = Round