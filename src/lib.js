module.exports = {
  sanitizeWhitespaces: function (str) {
    str = str.replace(/\t/g, ' ');
    str = str.replace(/\s\s+/g, ' ');
    return str.trim();
  }
};
