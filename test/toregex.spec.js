const toregex = require('../src/toregex');

test('Throws TypeError with no String', () => {
  function failMe() {toregex(123)}
  expect(failMe).toThrow(TypeError);
});

test('Throws SyntaxError at mismatch', () => {
  function failMe() {toregex('[close me')}
  expect(failMe).toThrow(SyntaxError);
});

test('Testing literal ceql to toregex', () => {
  expect(toregex('foobar')).toEqual(/foobar/);
});

test('Testing alternation ceql to toregex', () => {
  expect(toregex('foo[bar,foo]')).toEqual(/foo(bar|foo)/);
});

test('Testing ? ceql to toregex', () => {
  expect(toregex('foob?r')).toEqual(/foob.r/);
});

test('Testing complex ceql to toregex', () => {
  expect(toregex('*oo+oo*')).toEqual(/.*oo.+oo.*/);
});
