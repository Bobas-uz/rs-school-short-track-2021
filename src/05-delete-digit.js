/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(String(n), Number);
  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  return parseInt(arr.join(''), 10);
}

module.exports = deleteDigit;
