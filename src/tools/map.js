function map(array, transform) {
    let mapped = [], x;
    for (x = 0; x < array.length; x++) {
        mapped.push(transform(array[x]));
    }
    return mapped;
};

module.exports = map;