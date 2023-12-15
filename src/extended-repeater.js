const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  newStr = str.toString();
  let res = "";
  let separator = options.separator ? options.separator : "+";
  let addition = options.addition ? options.addition.toString() : "";
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0
  let additionSeparator = options.additionSeparator ? options.additionSeparator.toString() : ''

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      let addition = ''
      if(options.additionRepeatTimes) {

      }
    }
  }
  /* for( let key in options) {
    if()
  } */
}

module.exports = {
  repeater,
};
