
function myCall(context) {
  const args = Array.prototype.splice.call(arguments, 1);
  context = context || global;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// Function.prototype.myCall = myCall;
module.exports = myCall;
