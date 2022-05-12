const chai = require('chai');
const expect = chai.expect;
const Turns = require('../src/Turns');
const Card = require('../src/Card');

describe('Turns', () => {

  it('should be a function', () => {
    
    expect(Turns).to.be.a('function');
  });

  it('should be an instance of turn', () => {
    const turn = new Turns()

    expect(turn).to.be.an.instanceof(Turns);
  });
  
  it("should store a user's guess to a question", () => {
    const turn = new Turns('prototype method')

    expect(turn.guess).to.equal('prototype method');
  });

  it('should recognize current card in play', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turns('array', card)

    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return guesses', () => {
    const card = new Card(2, 'shift(), unshift(), pop(), and push() are examples of what type of array property method?', ["mutator method", "accessor method", "iteration method"], "mutator method")
    const turn = new Turns('accessor method', card)

    turn.returnGuess()

    expect(turn.returnGuess()).to.equal('accessor method')
  })

  it('should return cards', () => {
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method')
    const turn = new Turns('iteration method', card)

    turn.returnCard()

    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate if the guess is correct or not', () => {
    const card = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ["mutator method", "accessor method", "iteration method"], 'accessor method')
    const turn = new Turns('mutator method', card)
    const nextTurn = new Turns('accessor method', card)

    turn.evaluateGuess()
    nextTurn.evaluateGuess() 

    expect(turn.evaluateGuess()).to.be.false;
    expect(nextTurn.evaluateGuess()).to.be.true;
  });

  it('should give feedback for correct and incorrect answers', () => {
    const card = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ["mutator method", "accessor method", "iteration method"], 'accessor method')
    const turn = new Turns('mutator method', card)
    const nextTurn = new Turns('accessor method', card)
    
    turn.evaluateGuess()
    turn.giveFeedback()
    nextTurn.evaluateGuess()
    nextTurn.giveFeedback()

    expect(turn.evaluateGuess()).to.be.false;
    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(nextTurn.evaluateGuess()).to.be.true;
    expect(nextTurn.giveFeedback()).to.equal('correct!')

  })
});