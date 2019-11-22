const reduce = require('../src/tools/reduce');

test('Transforms the elements of an array', () => {
    expect(reduce([1, 2, 3])).toEqual(6);
});