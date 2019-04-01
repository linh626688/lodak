/**
 *
 * @param {string} [string=''] the string to convert
 * @returns {string} a camel cased string
 */
export const camelCase = (str = '') => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
};
