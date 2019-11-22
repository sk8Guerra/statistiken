const statistiken = require('../../statistiken');

test('Calculates the mode of a list of numbers.', () => {
    expect(statistiken.mode([3, 5, 4, 4, 1, 1, 1, 2])).toEqual({"modes": [1]});
});

test('Calculates the mode of a list of numbers. It will be bimodal.', () => {
    expect(statistiken.mode([3, 5, 4, 4, 1, 1, 2])).toEqual({"description": "bimodal", "modes": [1, 4]});
});

test('Calculates the mode of a list of numbers. It will be trimodal.', () => {
    expect(statistiken.mode([3, 5, 4, 4, 1, 1, 2, 3])).toEqual({"description": "trimodal", "modes": [1, 3, 4]});
});

test('Calculates the mode of a list of numbers. It will be nultimodal.', () => {
    expect(statistiken.mode([3, 5, 4, 4, 1, 1, 2, 3, 4, 3, 4, 1, 1, 3, 5, 5, 5]))
        .toEqual({"description": "multimodal", "modes": [1, 3, 4, 5]});
});