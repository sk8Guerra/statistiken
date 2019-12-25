
const statistiken = require('../../statistiken');

test('1st decile from position class that belong to main class Statistiken', () => {
    expect(statistiken.decile(1, [3, 4, 5, 6, 7])).toBeCloseTo(3);
});