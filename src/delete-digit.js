const { NotImplementedError } = require('../extensions/index.js');

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
  const arr = n.toString().split('')
  let maxNum = []
  for(let i = 0; i < arr.length; i++) {
    const tempArr = [...arr]
    tempArr.splice(i, 1)
    let temp = parseInt(tempArr.join(''))
    maxNum.push(temp)
  }
  return Math.max.apply(null, maxNum)
}

module.exports = {
  deleteDigit
};
