function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[ 0 ] > right[ 0 ]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }
  return result;
}
function mergeSort(data) {
  if (data.length < 2) {
    return data;
  }
  const mid = Math.floor(data.length / 2);
  const left = data.slice(0, mid);
  const right = data.slice(mid, data.length);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
