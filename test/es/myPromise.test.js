/**
 * @name myPromise.test
 * @description 针对myPromise.js的测试文件
 */

const MyPromise = require('../../es/myPromise');

describe('test myPromise.js', function() {
  it('test myPromise.js expect correct result in conversation 1', done => {
    const myPromise1 = new MyPromise(resolve => {
      setTimeout(() => {
        resolve(1);
      });
    });
    myPromise1.then(res => {
      expect(res).toBe(1);
      done();
    });
  });
  it('test myPromise.js expect correct result in conversation 2', done => {
    const myPromise1 = new MyPromise(resolve => {
      setTimeout(() => {
        resolve(2);
      });
    });
    myPromise1.then(res => {
      return res + 1;
    }).then(res => {
      expect(res).toBe(3);
      done();
    });
  });
  it('test myPromise.js expect correct result in conversation 3', done => {
    const myPromise1 = new MyPromise(resolve => {
      resolve(4);
    });
    myPromise1.then(res => {
      expect(res).toBe(4);
      done();
    });
  });
});
