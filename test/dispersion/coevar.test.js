const statistiken = require('../../statistiken');

test('Calculate the coefficient of variation from a list of numbers.', () => {
    expect(statistiken.coevar([1, 2, 3, 4])).toBeCloseTo(51.64);
});
