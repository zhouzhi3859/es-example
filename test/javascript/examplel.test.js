/**
 * @name example.test
 * @description 针对example.js的测试文件
 */

const expect = require('chai').expect;
const example = require('../../javascript/example');

describe('test example.js', function() {
  it('test myCall.js correct', async function() {
    const res = await example(1);
    expect(res).to.equal(2);
  });
});
