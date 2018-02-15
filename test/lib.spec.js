const lib = require('../src/lib');

test('Testing trim whitespaces from string', () => {
  expect(lib.sanitizeWhitespaces(' foobar ')).toBe('foobar');
});

test('Testing merge whitespaces in string', () => {
  expect(lib.sanitizeWhitespaces('foo   bar')).toBe('foo bar');
});

test('Testing merge and trim whitespaces in string', () => {
  expect(lib.sanitizeWhitespaces('  foo   bar  ')).toBe('foo bar');
});

test('Testing trim tabs in string', () => {
  expect(lib.sanitizeWhitespaces("\tfoobar\t")).toBe('foobar');
});

test('Testing merge tabs in string', () => {
  expect(lib.sanitizeWhitespaces("foo\t\t\tbar")).toBe('foo bar');
});

test('Testing metacharacter translation *', () => {
  expect(lib.translateMetachars('foob**r')).toBe('foob.*.*r');
  expect(lib.translateMetachars('f*bar')).toBe('f.*bar');
  expect(lib.translateMetachars('***')).toBe('.*.*.*');
  expect(lib.translateMetachars('*')).toBe('.*');
})

test('Testing metacharacter translation +', () => {
  expect(lib.translateMetachars('foob++r')).toBe('foob.+.+r');
  expect(lib.translateMetachars('f+bar')).toBe('f.+bar');
  expect(lib.translateMetachars('+++')).toBe('.+.+.+');
  expect(lib.translateMetachars('+')).toBe('.+');
})

test('Testing metacharacter translation ?', () => {
  expect(lib.translateMetachars('foob?r')).toBe('foob.r');
  expect(lib.translateMetachars('f??bar')).toBe('f..bar');
  expect(lib.translateMetachars('???')).toBe('...');
  expect(lib.translateMetachars('?')).toBe('.');
});

test('Testing metacharacter translation [,]', () => {
  expect(lib.translateMetachars('[,]')).toBe('(|)');
  expect(lib.translateMetachars('[foo,bar]')).toBe('(foo|bar)');
  expect(lib.translateMetachars('[]')).toBe('()');
  expect(lib.translateMetachars(',,,')).toBe('|||');
  expect(lib.translateMetachars(',')).toBe('|');
});

test('Testing missing parentheses [](){}', () => {
  expect(lib.validParentheses('nothingtosee')).toBe(true);

  expect(lib.validParentheses('[good]')).toBe(true);
  expect(lib.validParentheses('(good)')).toBe(true);
  expect(lib.validParentheses('{good}')).toBe(true);
  expect(lib.validParentheses('[]')).toBe(true);
  expect(lib.validParentheses('()')).toBe(true);
  expect(lib.validParentheses('{}')).toBe(true);

  expect(lib.validParentheses('[')).toBe(false);
  expect(lib.validParentheses('[bad')).toBe(false);
  expect(lib.validParentheses('bad]')).toBe(false);
  expect(lib.validParentheses(']')).toBe(false);

  expect(lib.validParentheses('{')).toBe(false);
  expect(lib.validParentheses('{bad')).toBe(false);
  expect(lib.validParentheses('bad}')).toBe(false);
  expect(lib.validParentheses('}')).toBe(false);

  expect(lib.validParentheses('(')).toBe(false);
  expect(lib.validParentheses('(bad')).toBe(false);
  expect(lib.validParentheses('bad)')).toBe(false);
  expect(lib.validParentheses(')')).toBe(false);

  expect(lib.validParentheses('()[ugly')).toBe(false);
  expect(lib.validParentheses('()ugly]')).toBe(false);

  expect(lib.validParentheses('{}[ugly')).toBe(false);
  expect(lib.validParentheses('{}ugly]')).toBe(false);
});
