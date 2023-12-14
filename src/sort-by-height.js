const { NotImplementedError } = require('../extensions/index.js');

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
  const nums = arr.filter(num => num >= 0).sort((a, b) => a-b)
  let indexes = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) indexes.push(i)
  }
  for(let  i = 0; i < indexes.length; i++) {
    nums.splice(indexes[i], 0, -1)
  }
  return nums
}

module.exports = {
  sortByHeight
};
