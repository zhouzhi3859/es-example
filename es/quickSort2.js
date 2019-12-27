function quickSort2(data, start = 0, end = data.length - 1) {
  if (start >= end) {
    return;
  }
  // 选取第0个作为基准元素
  let leftPtr = start;
  let rightPtr = end;
  const flat = data[ start ];
  // 先检查右边
  while (leftPtr < rightPtr && data[ rightPtr ] >= flat) {
    rightPtr--;
  }
  if (leftPtr < rightPtr) {
    data[ leftPtr++ ] = data[ rightPtr ];
  }
  while (leftPtr < rightPtr && data[ leftPtr ] < flat) {
    leftPtr++;
  }
  if (leftPtr < rightPtr) {
    data[ rightPtr-- ] = data[ leftPtr ];
  }
  data[ leftPtr ] = flat;
  quickSort2(data, start, leftPtr - 1);
  quickSort2(data, leftPtr + 1, end);
}

module.exports = quickSort2;
