const statistiken = require('../statistiken');

test('Order the array in desc mode', () => {
    expect(statistiken.orderDesc([5, 3, 2, 8, 10])).toEqual([2, 3, 5, 8, 10]);
});