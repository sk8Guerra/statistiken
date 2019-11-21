const reduce = require('../src/tools/reduce');

test('Transforms the elements of an array', () => {
    expect(reduce([1, 2, 3], 0)).toEqual(6);
});