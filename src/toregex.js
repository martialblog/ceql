const lib = require('./lib');

module.exports = function (input) {
  let str = '';

  if (typeof input !== 'string') {
    throw new TypeError('Invalid input. Input must be a string');
  }

  if (!lib.validParentheses(input)) {
    throw new SyntaxError('Invalid input. Missmatched parentheses');
  }

  str = lib.sanitizeWhitespaces(input);
  str = lib.translateMetachars(str);

  return new RegExp(str);
};
