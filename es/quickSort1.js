function quickSort1(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2);
  const mid = arr[ midIndex ];
  const left = [];
  const right = [];
  for (const i in arr) {
    if (arr[ i ] < mid) {
      left.push(arr[ i ]);
    } else if (arr[ i ] > mid) {
      right.push(arr[ i ]);
    }
  }
  return quickSort1(left).concat(mid).concat(quickSort1(right));
}

module.exports = quickSort1;
