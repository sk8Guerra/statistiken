const Statistiken = require('../statistiken').Statistiken;

test('Mean from arithmetic class that belong to main class Statistiken', () => {
    expect(new Statistiken([3, 4, 5, 6, 7]).arithmetic().mean()).toEqual(5);
});

test('Median from arithmetic class that belong to main class Statistiken', () => {
    expect(new Statistiken([3, 4, 5, 6, 7]).arithmetic().median()).toEqual(5);
});

test('Mode from arithmetic class that belong to main class Statistiken', () => {
    expect(new Statistiken([3, 4, 5, 6, 7, 7]).arithmetic().mode()).toEqual({"modes": [7]});
});

test('Variance from dispersion class that belong to main class Statistiken', () => {
    expect(new Statistiken([3, 4, 5, 6, 7]).dispersion().variance()).toEqual(2.5);
});

test('Standard Deviation from dispersion class that belong to main class Statistiken', () => {
    expect(new Statistiken([3, 4, 5, 6, 7]).dispersion().stddev()).toBeCloseTo(1.5811388300841898);
});

test('Variation Coefficient from dispersion class that belong to main class Statistiken', () => {
    expect(new Statistiken([3, 4, 5, 6, 7]).dispersion().coevar()).toBeCloseTo(31.6227766017);
});

test('1st decile from position class that belong to main class Statistiken', () => {
    expect(new Statistiken([3, 4, 5, 6, 7]).position().decile(1)).toBeCloseTo(3);
});

test('1st percentile from position class that belong to main class Statistiken', () => {
    expect(new Statistiken([3, 4, 5, 6, 7]).position().percentile(1)).toEqual(3);
});


