const chai = require('chai');
//below we use .should();
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe('Canary Test', () => {
  it('The string hello should be hello', () => {
    const hello = 'hello';

    hello.should.be.equal('hello');
    // hello.should.be.equal('hello');
    // hello.should.be.equal('hello');

  });

  it('typeof string should be string', () => {
    const str = 'random string skjg';

    str.should.be.a('string')
    expect(str).to.be.a('string');
    assert.typeOf(str, 'string');
  })

});
