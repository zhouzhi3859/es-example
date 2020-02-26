class MyPromise {
  constructor(func) {
    this.status = 'PENDING';
    this.value = null;
    this.nextFuncArr = [];
    func(this.onSuccess.bind(this));
  }
  onSuccess() {
    this.status = 'SUCCESS';
    setTimeout(() => {
      this.nextFuncArr.forEach(func => {
        this.value = func(this.value);
      });
    }, 0);
  }
  then(nextFunc) {
    this.nextFuncArr.push(nextFunc);
    return this;
  }
}

module.exports = MyPromise;

