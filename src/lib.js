/* eslint-disable no-useless-escape */

const metacharTable = {
  '\\?': '.',
  '\\*': '.*',
  '\\+': '.+',
  '\\[': '(',
  '\\]': ')',
  ',': '|'
};

module.exports = {
  sanitizeWhitespaces: function (str) {
    str = str.replace(/\t/g, ' ');
    str = str.replace(/\s\s+/g, ' ');
    return str.trim();
  },
  translateMetachars: function (str) {
    for (let char in metacharTable) {
      let charReg = new RegExp(char, 'g')
      str = str.replace(charReg, metacharTable[char]);
    }
    return str;
  },
  validParentheses: function (str) {
    let isValid = true;
    if (/[(){}\[\]]/.test(str)) {
      isValid = ( str.match( /\(/g ) || '' ).length == ( str.match( /\)/g ) || '' ).length &&
        ( str.match( /\[/g ) || '' ).length == ( str.match( /]/g ) || '' ).length &&
        ( str.match( /{/g ) || '' ).length == ( str.match( /}/g ) || '' ).length;
    }
    return isValid;
  }
};
