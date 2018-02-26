const toregex = require('../src/toregex');

test('Throws TypeError with no String', () => {
  function failMe() {toregex(123)}
  expect(failMe).toThrow(TypeError);
});

test('Throws SyntaxError at mismatch', () => {
  function failMe() {toregex('[close me')}
  expect(failMe).toThrow(SyntaxError);
});
