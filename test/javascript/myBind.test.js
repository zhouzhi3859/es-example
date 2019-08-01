/**
 * @name myBind.test
 * @description 针对myCall.js的测试文件
 */

const expect = require('chai').expect;
const myBind = require('../../javascript/myBind');

describe('test myBind.js', function() {
  before(() => {
    Function.prototype.myBind = myBind;
    global.type = 1;
  });
  after(() => {
    delete Function.prototype.myBind;
    delete global.type;
  });
  it('test myBind.js correct', () => {
    const obj1 = {
      value: 1,
    };
    function test(value2) {
      return this.value + value2;
    }
    expect(test.myBind(obj1, 2)()).to.equal(3);
  });
  it('test myBind.js withOut parameter correct', () => {
    function test() {
      return this.type;
    }
    expect(test.myBind()()).to.equal(1);
  });
});
