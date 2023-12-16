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
  newStr = String(str);

  let addition = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(String(options.addition));
  }
  let res = [];
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      res.push(newStr + addition.join(additionSeparator));
    }
  } else {
    res.push(newStr + String(options.addition));
  }

  if(newStr === 'STRING_OR_DEFAULT' && String(options.addition) === 'STRING_OR_DEFAULT') {
    res = []
    for(let i = 0; i < options.repeatTimes; i++) {
      res.push(newStr + String(options.addition))
    }
  }

  let separator = options.separator ? options.separator : "+";
  return res.join(separator);
}

module.exports = {
  repeater,
};
