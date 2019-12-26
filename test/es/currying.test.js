/**
 * @name currying.test
 * @description 针对currying.js的测试文件
 */

const currying = require('../../es/currying');

describe('test currying.js', function() {
  it('test currying.js expect correct result', () => {
    expect(currying(1, 2)(3) == 6).toBe(true); // eslint-disable-line
  });
  it('test currying.js expect incorrect result', () => {
    expect(currying(1, 2)(3) == 5).toBe(false); // eslint-disable-line
  });
});
