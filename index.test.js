const titleCase = require('./index.js');

describe('examples', () => {
  test('A Clash of Kings', () => {
    expect(titleCase('a clash of KINGS', 'a an the of')).toBe(
      'A Clash of Kings',
    );
  });

  test('The Wind in the Willows', () => {
    expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toBe(
      'The Wind in the Willows',
    );
  });

  test('The Quick Brown Fox', () => {
    expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
  });
});
