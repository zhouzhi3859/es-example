function quickSort(data, left, right) {
  // 选取第0个作为基准元素
  const flat = data[ 0 ];
  // 先检查右边
  while (data[ right ] >= flat) {
    right--;
  }
}

module.exports = quickSort;
