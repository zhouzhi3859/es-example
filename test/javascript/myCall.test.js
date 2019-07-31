/**
 * @name myCall.test
 * @description 针对myCall.js的测试文件
 */

const expect = require('chai').expect;
const myCall = require('../../javascript/myCall');

describe('test myCall.js', function() {
  before(() => {
    Function.prototype.myCall = myCall;
    global.type = 1;
  });
  after(() => {
    delete Function.prototype.myCall;
    delete global.type;
  });
  it('test myCall.js correct', () => {
    const obj1 = {
      value: 1,
    };
    function test(value2) {
      return this.value + value2;
    }
    expect(test.myCall(obj1, 2)).to.equal(3);
  });
  it('test myCall.js withOut parameter correct', () => {
    function test() {
      return this.type;
    }
    expect(test.myCall()).to.equal(1);
  });
});
