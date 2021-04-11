/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] !== -1) {
        if (arr[j + 1] < arr[j] && arr[j + 1] !== -1) {
          const t = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = t;
        }
      }
    }
  }

  return arr;
}

module.exports = sortByHeight;
