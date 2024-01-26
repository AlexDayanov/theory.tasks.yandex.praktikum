function binarySearch(array, element) {
  let min = 0,
    max = array.length - 1;

  while (max >= min) {
    let half = min + Math.floor((max - min) / 2);
    if (array[half] == element) return half;
    if (array[half] > element) max = half - 1;
    if (array[half] < element) min = half + 1;
  }
  return -1;
}

module.exports = binarySearch;
