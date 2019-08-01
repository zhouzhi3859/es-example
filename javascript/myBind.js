
function myBind(context) {
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[ i ]);
  }
  context = context || global;
  context.fn = this;
  return function() {
    const res = context.fn(...args);
    delete context.fn;
    return res;
  };
}

// Function.prototype.myBind = myBind;
module.exports = myBind;
