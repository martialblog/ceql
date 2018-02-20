/* eslint-disable no-useless-escape */

const lib = require('./lib');

module.exports = function (input) {
  let str = '';
  let valid = false;

  if (typeof input !== 'string') {
    throw new TypeError('Invalid input. Input must be a string');
  }

  if (!lib.validParentheses(input)) {
    return valid;
  }

  str = lib.sanitizeWhitespaces(input);

  // Let's figure out what RegExp to use
  // TODO: We could reuse one RegExp
  if (str.startsWith('{')) {
    // Lemma
    valid = /{[a-z0-9À-ÿ]+}/.test(str);
  } else if (/_{/.test(str)) {
    // Wildcard or Literal with simple POS
    valid = /(^[A-Za-z0-9À-ÿ,\(\)\[\]\?\+\*\\]+(:d)?)?_{[A-Z$]+}$/.test(str);
  } else if (/_[A-Z]/.test(str)) {
    // Wildcard or Literal with POS
    valid = /(^[A-Za-z0-9À-ÿ,\(\)\[\]\?\+\*\\]+(:d)?)?_[A-Z0-9,\[\]\+\*]+$/.test(str);
  } else {
    // Wildcard or Literal
    valid = /^[A-Za-z0-9À-ÿ,\(\)\[\]\?\+\*\\]+(:d)?/.test(str);
  }

  return valid;
};
