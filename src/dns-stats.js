const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {}
  for(let i = 0; i < domains.length; i++) {
    const subdomains = domains[i].split('.').reverse()
    let current = ''
    for(let  i = 0; i < subdomains.length; i++) {
      current = current ? `${current}.${subdomains[i]}` : `.${subdomains[i]}`
      if(obj[current]) {
        obj[current] += 1
      } else {
        obj[current] = 1
      }
    }
  }
  return obj
}
getDNSStats([
 'code.yandex.ru',
 'music.yandex.ru',
 'yandex.ru'
])


module.exports = {
  getDNSStats
};
