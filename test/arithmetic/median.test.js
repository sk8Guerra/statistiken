const statistiken = require('../../statistiken');

test('Calculates the median of a list of number', () => {
    expect(statistiken.median([4, 10, 7, 15, 2])).toBe(7)
});