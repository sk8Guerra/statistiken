const mean = require('../../src/arithmetic/mean');

test('Condense the array it into one value', () => {
    expect(mean([1, 2], 0)).toBeCloseTo(1.5);
});