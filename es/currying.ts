function currying() {
  const as = [];
  for (const i in arguments) {
    as.push(arguments[ i ]);
  }
  function midObj() {
    for (const i in arguments) {
      as.push(arguments[ i ]);
    }
    return midObj;
  }
  midObj.toString = function() {
    let res = 0;
    for (let i = 0; i < as.length; i++) {
      res += as[ i ];
    }
    return res;
  };
  return midObj;
}
module.exports = currying;
