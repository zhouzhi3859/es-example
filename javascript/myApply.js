
function myApply(context) {
  const args = arguments[ 1 ] !== undefined ? arguments[ 1 ] : [];
  context = context || global;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// Function.prototype.myApply = myApply;
module.exports = myApply;
