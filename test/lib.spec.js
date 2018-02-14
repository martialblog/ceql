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
