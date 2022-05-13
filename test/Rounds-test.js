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

  it('should count turns', () => {
    const card1 = new Card(1, "What is Robbie's favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, "What organ is Khalid missing?", ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, "What is Travis's middle name?", ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);

    round.takeTurn('sea otter');
    console.log(round.turns, 'line 64, test file');
    round.takeTurn('pug');
    round.takeTurn('capybara');

    expect(round.turns).to.equal(3);
  });

  it('should change the current card', () => {
    const card1 = new Card(1, "What is Robbie's favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, "What organ is Khalid missing?", ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, "What is Travis's middle name?", ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);

    round.takeTurn('appendix');

    expect(round.returnCurrentCard()).to.deep.equal(card2)
  });
  
  it('should evaluate and record incorrect guesses', () => {
    const card1 = new Card(1, "What is Robbie's favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, "What organ is Khalid missing?", ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, "What is Travis's middle name?", ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);

    expect(round.takeTurn('William')).to.equal('incorrect!')
  });

  it('should evaluate correct guesses', () => {
    const card1 = new Card(1, "What is Robbie's favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, "What organ is Khalid missing?", ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, "What is Travis's middle name?", ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    
    expect(round.takeTurn('sea otter')).to.equal('correct!')
  });

});

// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct