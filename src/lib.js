const wildcardTable = {
  '?': '.',
  '*': '.?',
  '+': '.+',
  '[': '(',
  ']': ')',
  ',': '|'
};

module.exports = {
  sanitizeWhitespaces: function (str) {
    str = str.replace(/\t/g, ' ');
    str = str.replace(/\s\s+/g, ' ');
    return str.trim();
  },
  translateWildcard: function (wildcard) {
    if (wildcardTable.hasOwnProperty(wildcard)) {
      return wildcardTable[wildcard];
    } else {
      // TODO does that make sense to return the literal?
      return wildcard;
    }
  },
  validParentheses: function (str) {
    return /[(){}\[\]]/.test( str ) &&
      ( str.match( /\(/g ) || '' ).length == ( str.match( /\)/g ) || '' ).length &&
      ( str.match( /\[/g ) || '' ).length == ( str.match( /]/g ) || '' ).length &&
      ( str.match( /{/g ) || '' ).length == ( str.match( /}/g ) || '' ).length;
  }
};
