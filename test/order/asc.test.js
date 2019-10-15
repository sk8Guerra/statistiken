const statistiken = require('../../statistiken');

test('Order the array in ASCENDING mode.', () => {
    expect(statistiken.orderAsc([5, 3, 2, 8, 10])).toEqual([2, 3, 5, 8, 10]);
});

test('Order the array in ASCENDING mode 2.', () => {
    expect(statistiken.orderAsc([4, 2, 6, 5, 3, 9])).toEqual([ 2, 3, 4, 5, 6, 9 ]);
});