const Card = require('../src/Card');

class Turns {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    console.log(this.card);
  }
}

module.exports = Turns