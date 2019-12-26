/**
 * @name myCall.test
 * @description 针对myCall.js的测试文件
 */

const myCall = require('../../es/myCall');

describe('test myCall.js', function() {
  beforeEach(() => {
    // @ts-ignore
    Function.prototype.myCall = myCall;
    // @ts-ignore
    global.type = 1;
  });
  afterEach(() => {
    // @ts-ignore
    delete Function.prototype.myCall;
    // @ts-ignore
    delete global.type;
  });
  it('test myCall.js correct', () => {
    const obj1 = {
      value: 1,
    };
    function test(value2) {
      return this.value + value2;
    }
    // @ts-ignore
    expect(test.myCall(obj1, 2)).toBe(3);
  });
  it('test myCall.js withOut parameter correct', () => {
    function test() {
      return this.type;
    }
    // @ts-ignore
    expect(test.myCall()).toBe(1);
  });
});
