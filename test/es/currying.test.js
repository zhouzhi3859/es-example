/**
 * @name currying.test
 * @description 针对currying.js的测试文件
 */

const expect = require('chai').expect;
const currying = require('../../es/currying');

describe('test currying.ts', function() {
  it('test currying.ts expect correct result', () => {
    expect(currying(1, 2)(3) == 6).to.equal(true); // eslint-disable-line
  });
  it('test currying.ts expect incorrect result', () => {
    expect(currying(1, 2)(3) == 5).to.equal(false); // eslint-disable-line
  });
});
