class Deck {
  constructor(cards) {
    this.cards = cards
    console.log(this.cards, 'line 4');
  }
  countCards() {
    return this.cards.length
  }
}

module.exports = Deck;