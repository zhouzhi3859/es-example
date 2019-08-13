function bubbleSort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[ j + 1 ] < data[ j ]) {
        const tmp = data[ j ];
        data[ j ] = data[ j + 1 ];
        data[ j + 1 ] = tmp;
      }
    }
  }
  return data;
}

module.exports = bubbleSort;
