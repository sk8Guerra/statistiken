const statistiken = require('../../statistiken');

test('Condense the array it into one value', () => {
    expect(statistiken.mean([1, 2], 0)).toBeCloseTo(1.5);
});