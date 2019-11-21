const statistiken = require('../../statistiken');

test('Calculate the variance from a list of numbers.', () => {
    expect(statistiken.variance([1, 2, 3, 4])).toBeCloseTo(1.6666666666666667);
});