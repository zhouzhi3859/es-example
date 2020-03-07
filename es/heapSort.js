// 交换
function swap(arr, i, j) {
  const tmp = arr[ i ];
  arr[ i ] = arr[ j ];
  arr[ j ] = tmp;
}

// 调整堆 maxIndex 为最大调整范围
function adjustHeap(arr, i, maxIndex) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largestIndex = i;
  // 需要判断节点是否超出范围
  if (left < maxIndex && arr[ left ] > arr[ largestIndex ]) {
    largestIndex = left;
  }
  if (right < maxIndex && arr[ right ] > arr[ largestIndex ]) {
    largestIndex = right;
  }
  // 如果存在子节点比自身大的情况，需要调整
  if (largestIndex !== i) {
    swap(arr, i, largestIndex); // 交换
    adjustHeap(arr, largestIndex, maxIndex); // 向下调整
  }
}

// 构建最大堆
function buildHeap(arrSource) {
  if (arrSource.length === 0) {
    return [];
  }
  const arr = JSON.parse(JSON.stringify(arrSource));
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    adjustHeap(arr, i, arr.length);
  }
  return arr;
}

// 堆排序
function heapSort(arr) {
  const bigHeap = buildHeap(arr);
  for (let i = bigHeap.length - 1; i >= 0; i--) {
    swap(bigHeap, 0, i);
    adjustHeap(bigHeap, 0, i);
  }
  return bigHeap;
}

module.exports = heapSort;
