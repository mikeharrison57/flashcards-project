const chai = require('chai');
const expect = chai.expect;
// const Card = require('../src/Card');
const Turns = require('../src/Turns');

describe('Turns', () => {

  it('should be a function', () => {
    const turn = new Turns()
    expect(Turns).to.be.a('function');
  });

  it('should be an instance of turn', () => {
    const turn = new Turns()
    expect(turn).to.be.an.instanceof(Turns);
  });
  
  it('should have ')
});