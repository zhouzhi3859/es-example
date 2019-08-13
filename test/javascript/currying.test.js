/**
 * @name currying.test
 * @description 针对currying.js的测试文件
 */

const expect = require('chai').expect;
const currying = require('../../javascript/currying');

describe('test currying.js', function() {
  it('test currying.js expect correct result', () => {
    expect(currying(1, 2)(3) == 6).to.equal(true); // eslint-disable-line
  });
  it('test currying.js expect incorrect result', () => {
    expect(currying(1, 2)(3) == 5).to.equal(false); // eslint-disable-line
  });
});
