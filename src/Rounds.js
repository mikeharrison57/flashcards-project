class Round {
  constructor(deck) {
    this.deck = deck;
  }
  returnCurrentCard() {
    const currentCard = this.deck.cards.find(card => card === card);
    console.log(currentCard)
    return currentCard
  }
}

module.exports = Round