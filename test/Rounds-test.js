const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turns = require('../src/Turns');
const Deck = require('../src/Deck');
const Round = require('../src/Rounds');

describe('Round', () => {

  it('should be a function', () => {

    expect(Round).to.be.a('function')
  });

  it('should instantiate round', () => {
    const round1 = new Round() ;

    expect(round1).to.be.an.instanceof(Round)
  });

  it('should have a deck', () => {
    const card1 = new Card(1, "What is Robbie's favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, "What organ is Khalid missing?", ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, "What is Travis's middle name?", ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    expect(round1.deck).to.be.an.instanceof(Deck)

  });

  it('should return the current card', () => {
    const card1 = new Card(1, "What is Robbie's favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, "What organ is Khalid missing?", ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, "What is Travis's middle name?", ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);
    
    round1.returnCurrentCard()

    expect(round1.returnCurrentCard()).to.equal(round1.deck.cards[0])
  });
});