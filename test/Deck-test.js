const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  it('should be a function', () => {
    const deck1 = new Deck()
    expect(Deck).to.be.a('function')
  });

  it('should be an instance of deck', () => {
    const deck2 = new Deck()
    expect(deck2).to.be.an.instanceof(Deck);
  });
  
  it('should contain many card instances', () => {
    const card1 = new Card(1, "What is Robbie's favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, "What organ is Khalid missing?", ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, "What is Travis's middle name?", ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);

    expect(deck1.cards).to.deep.equal([card1, card2, card3])
  });

  it('should be able to count cards in the deck', () => {
    const card1 = new Card(1, "What is Robbie's favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, "What organ is Khalid missing?", ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, "What is Travis's middle name?", ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);

    deck1.countCards()

    expect(deck1.countCards()).to.deep.equal(3)

  });
});