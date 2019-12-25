const statistiken = require('../../statistiken');

test('1st percentile from position class that belong to main class Statistiken', () => {
    expect(statistiken.percentile(1, [3, 4, 5, 6, 7])).toEqual(3);
});