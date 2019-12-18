function selectionSort(data) {
  let flag = 0;
  for (let i = 0; i < data.length; i++) {
    let min = -1;
    for (let j = flag; j < data.length; j++) {
      if (min >= 0 && data[ j ] < min) {
        min = data[ j ];
        data[ j ] = data[ flag ];
        data[ flag ] = min;
      } else if (min < 0) {
        min = data[ j ];
      }
    }
    flag++;
  }
  return data;
}
module.exports = selectionSort;
