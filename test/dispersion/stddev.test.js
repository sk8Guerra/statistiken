const statistiken = require('../../statistiken');

test('Calculate the standard deviation from a list of numbers.', () => {
    expect(statistiken.stddev([1, 2, 3, 4])).toBeCloseTo(1.2909944487358056);
});
