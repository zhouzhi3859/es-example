/**
 * @name myBind.test
 * @description 针对myCall.js的测试文件
 */

const expect = require('chai').expect;
const myBind = require('../../es/myBind.ts');

describe('test myBind.ts', function() {
  before(() => {
    // @ts-ignore
    Function.prototype.myBind = myBind;
    // @ts-ignore
    global.type = 1;
  });
  after(() => {
    // @ts-ignore
    delete Function.prototype.myBind;
    // @ts-ignore
    delete global.type;
  });
  it('test myBind.ts correct', () => {
    const obj1 = {
      value: 1,
    };
    function test(value2) {
      return this.value + value2;
    }
    // @ts-ignore
    expect(test.myBind(obj1, 2)()).to.equal(3);
  });
  it('test myBind.ts withOut parameter correct', () => {
    function test() {
      return this.type;
    }
    // @ts-ignore
    expect(test.myBind()()).to.equal(1);
  });
});
