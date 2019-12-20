class MyPromise {
  constructor(func) {
    this.status = 'PENDING';
    this.value = null;
    this.nextFuncArr = [];
    func(this.onSuccess.bind(this), this.onFail.bind(this));
  }
  onSuccess(value) {
    this.value = value;
    this.status = 'SUCCESS';
    setTimeout(() => {
      this.nextFuncArr.forEach(val => {
        this.value = val(this.value);
      });
    }, 0);
  }
  onFail() {
    this.status = 'FAILED';
  }
  then(nextFunc) {
    this.nextFuncArr.push(nextFunc);
    return this;
  }
}

const myPromise1 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
});
myPromise1.then(res => {
  console.log('res', res);
  return 2;
}).then(res => {
  console.log('res', res);
});

const myPromise2 = new MyPromise(resolve => {
  resolve(3);
});
myPromise2.then(res => {
  console.log('res', res);
  return 4;
}).then(res => {
  console.log('res', res);
});

