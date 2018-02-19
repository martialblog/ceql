const validate = require('../src/validate');

test('Throws TypeError with no String', () => {
  function failMe() {validate(123)}
  expect(failMe).toThrow(TypeError);
});

test('Testing parentheses mismatch', () => {
  expect(validate('[')).toBe(false);
  expect(validate('{')).toBe(false);
  expect(validate('(')).toBe(false);
  expect(validate('}')).toBe(false);
  expect(validate('}')).toBe(false);
  expect(validate(')')).toBe(false);
});

test('Testing validate lemma', () => {
  expect(validate('{lemma}')).toBe(true);
  expect(validate('{123}')).toBe(true);

  expect(validate('{}')).toBe(false);
  expect(validate('{lemma_}')).toBe(false);
  expect(validate('{l?mma}')).toBe(false);
  expect(validate('{LEMMA}')).toBe(false);
});

test('Testing validate POS', () => {
  expect(validate('_POS')).toBe(true);
  expect(validate('_P')).toBe(true);
  expect(validate('with_P')).toBe(true);
  expect(validate('gre?t_P2')).toBe(true);
  expect(validate('P*wer_P*')).toBe(true);
  expect(validate('comes_V[ER,B]')).toBe(true);

  expect(validate('great_RESP_')).toBe(false);
  expect(validate('_onsability')).toBe(false);
  expect(validate('_')).toBe(false);
});

test('Testing validate simple POS', () => {
  expect(validate('_{VERB}')).toBe(true);
  expect(validate('_{P}')).toBe(true);
  expect(validate('_{$}')).toBe(true);
  expect(validate('what_{$}')).toBe(true);
  expect(validate('WH?T_{$}')).toBe(true);

  expect(validate('_{}')).toBe(false);
  expect(validate('_{P?S}')).toBe(false);
  expect(validate('_{P*S}')).toBe(false);
});

test('Testing validate literal-wildcards', () => {
  expect(validate('hans')).toBe(true);
  expect(validate('Gr?ber')).toBe(true);
  expect(validate('[alan,rickman]')).toBe(true);
  expect(validate('john:d')).toBe(true);
  expect(validate('McCl4n3')).toBe(true);

  expect(validate('')).toBe(false);
});
