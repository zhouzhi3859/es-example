/**
 * @name myBind.test
 * @description 针对myCall.js的测试文件
 */

const myBind = require('../../es/myBind');

describe('test myBind.js', function() {
  beforeEach(() => {
    // @ts-ignore
    Function.prototype.myBind = myBind;
    // @ts-ignore
    global.type = 1;
  });
  afterEach(() => {
    // @ts-ignore
    delete Function.prototype.myBind;
    // @ts-ignore
    delete global.type;
  });
  it('test myBind.js correct', () => {
    const obj1 = {
      value: 1,
    };
    function test(value2) {
      return this.value + value2;
    }
    // @ts-ignore
    expect(test.myBind(obj1, 2)()).toBe(3);
  });
  it('test myBind.js withOut parameter correct', () => {
    function test() {
      return this.type;
    }
    // @ts-ignore
    expect(test.myBind()()).toBe(1);
  });
});
