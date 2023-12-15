const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let counter = 0
let res = ''
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) {
      counter += 1
    } else {
      let temp = counter > 0 ? counter + 1 : ''
      res += temp + str[i]
      counter = 0
    }
  }
  return res
}

module.exports = {
  encodeLine
};
