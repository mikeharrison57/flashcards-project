const chai = require('chai');
const expect = chai.expect;
const Turns = require('../src/Turns');
const Card = require('../src/Card');

describe('Turns', () => {

  it('should be a function', () => {
    const turn = new Turns()
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
    const turn = new Turns("Object.values()", card)
    expect(turn.card).to.be.an.instanceof(Card);
  })
});