/**
 * @name myApply.test
 * @description 针对myApply.js的测试文件
 */

const myApply = require('../../es/myApply');

describe('test myApply.js', function() {
  beforeEach(() => {
    // @ts-ignore
    Function.prototype.myApply = myApply;
    // @ts-ignore
    global.type = 1;
  });
  afterEach(() => {
    // @ts-ignore
    delete Function.prototype.myApply;
    // @ts-ignore
    delete global.type;
  });
  it('test myApply.js correct', () => {
    const obj1 = {
      value: 1,
    };
    function test(value2) {
      return this.value + value2;
    }
    // @ts-ignore
    expect(test.myApply(obj1, [ 2 ])).toBe(3);
  });
  it('test myApply.js withOut parameter correct', () => {
    function test() {
      return this.type;
    }
    // @ts-ignore
    expect(test.myApply()).toBe(1);
  });
});
