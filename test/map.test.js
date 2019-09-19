const map = require('../src/tools/map');

test('Transforms the elements of an array', () => {
    expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
});