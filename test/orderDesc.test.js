const statistiken = require('../statistiken');

test('Order the array in DESCENDING mode.', () => {
    expect(statistiken.orderDesc([5, 3, 2, 8, 10])).toEqual([10, 8, 5, 3, 2]);
});