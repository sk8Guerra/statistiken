const statistiken = require('../../statistiken');

test('Calculate the standard deviation from a list of numbers.', () => {
    expect(statistiken.avgdev([3, 8, 8, 8, 8, 9, 9, 9, 9])).toBeCloseTo(1.0864197530864195);
});
