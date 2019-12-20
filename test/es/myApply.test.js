/**
 * @name myApply.test
 * @description 针对myApply.js的测试文件
 */

const expect = require('chai').expect;
const myApply = require('../../es/myApply');

describe('test myApply.ts', function() {
  before(() => {
    // @ts-ignore
    Function.prototype.myApply = myApply;
    // @ts-ignore
    global.type = 1;
  });
  after(() => {
    // @ts-ignore
    delete Function.prototype.myApply;
    // @ts-ignore
    delete global.type;
  });
  it('test myApply.ts correct', () => {
    const obj1 = {
      value: 1,
    };
    function test(value2) {
      return this.value + value2;
    }
    // @ts-ignore
    expect(test.myApply(obj1, [ 2 ])).to.equal(3);
  });
  it('test myApply.ts withOut parameter correct', () => {
    function test() {
      return this.type;
    }
    // @ts-ignore
    expect(test.myApply()).to.equal(1);
  });
});
