const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'

  if(!(date instanceof Date)) {
    throw new Error("Invalid date!")
  }

  if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!');
  }

  const month = date.getMonth()

  if(month === 11 || month === 0 || month === 1) {
    return 'winter'
  } else if(month >= 2 && month <= 4) {
    return 'spring'
  } else if(month >= 5 && month <= 7) {
    return 'summer'
  } else if(month >= 8 && month <= 10) {
    return 'autumn'
  }
}

//getSeason(new Date('2020-02-31'))
getSeason( new Date(1900, 0, 22, 23, 45, 11, 500))
//getSeason(new Date(1354, 4, 17, 11, 27, 4, 321))
//getSeason(new Date(1, 6, 13, 23, 45, 11, 500))
//getSeason(new Date(22, 8, 22, 3, 0, 11, 500))

module.exports = {
  getSeason
};
