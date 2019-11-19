const statistiken = require('../../statistiken');

test('Calculates the mode of a list of number', () => {
    expect(statistiken.mode([3, 5, 4, 4, 1, 1, 2, 3])).toEqual([1, 3, 4])
});