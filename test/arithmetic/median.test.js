const statistiken = require('../../statistiken');

test('Calculates the median of a list of numbers (odd amount)', () => {
    expect(statistiken.median([4, 10, 7, 15, 2])).toBe(7)
});

test('Calculates the median of a list of numbers (even amount)', () => {
  expect(statistiken.median([7, 8, 9, 10, 11, 20])).toBe(9.5)
});