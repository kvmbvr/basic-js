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
  let obj = {}
  for(let i = 0; i < str.length; i++) {
    if(!obj[str[i]]) {
      obj[str[i]] = 0
    }
    obj[str[i]] += 1
  }
  const keys =  Object.keys(obj)

  let result = ''
  for(let i = 0; i < keys.length; i++) {
    if(obj[keys[i]] > 1) {
      result += obj[keys[i]] + keys[i]
    } else {
      result += keys[i]
    }
  }
  return result
}

module.exports = {
  encodeLine
};
