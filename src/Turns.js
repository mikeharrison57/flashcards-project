const Card = require('../src/Card');

class Turns {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess; 
  }
  returnCard() {
    
    return this.card;
  }
  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false
    }
  }
  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turns