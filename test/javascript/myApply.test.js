/**
 * @name myApply.test
 * @description 针对myApply.js的测试文件
 */

const expect = require('chai').expect;
const myApply = require('../../javascript/myApply');

describe('test myCall.js', function() {
  before(() => {
    Function.prototype.myApply = myApply;
    global.type = 1;
  });
  after(() => {
    delete Function.prototype.myApply;
    delete global.type;
  });
  it('test myCall.js correct', () => {
    const obj1 = {
      value: 1,
    };
    function test(value2) {
      return this.value + value2;
    }
    expect(test.myApply(obj1, [ 2 ])).to.equal(3);
  });
  it('test myCall.js withOut parameter correct', () => {
    function test() {
      return this.type;
    }
    expect(test.myApply()).to.equal(1);
  });
});
