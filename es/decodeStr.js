function getInnerLeftAndRightIndex(resource) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < resource.length; i++) {
    if (resource[ i ] === ']') {
      right = i;
      break;
    }
  }
  for (let j = right; j >= 0; j--) {
    if (resource[ j ] === '[') {
      left = j;
      break;
    }
  }
  return { left, right };
}

function decodeStr(resource) {
  if (resource.length === 0) {
    return resource;
  }
  const { left, right } = getInnerLeftAndRightIndex(resource);
  if (left === 0 && right === 0) {
    return resource;
  }
  // 如果之前是数字
  if (!isNaN(Number(resource[ left - 1 ]))) {
    const round = Number(resource[ left - 1 ]);
    let result = '';
    for (let i = 0; i < round; i++) {
      result += resource.substring(left + 1, right);
    }
    resource = resource.substring(0, left - 1) + result + resource.substring(right + 1);
  }
  return decodeStr(resource);
}

module.exports = decodeStr;
