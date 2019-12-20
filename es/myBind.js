
function myBind(context) {
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[ i ]);
  }
  context = context || global;
  context.fn = this;
  const func = function() {
    const res = context.fn(...args);
    delete context.fn;
    return res;
  };
  // 修复原型链
  func.prototype = context.fn.prototype;
  return func;
}

// Function.prototype.myBind = myBind;
module.exports = myBind;
