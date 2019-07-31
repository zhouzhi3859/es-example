
function myCall(context) {
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[ i ]);
  }
  context = context || global;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// Function.prototype.myCall = myCall;
module.exports = myCall;
