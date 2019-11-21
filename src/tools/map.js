function map(array, transform) {
    var mapped = [], x;
    for (x = 0; x < array.length; x++) {
        mapped.push(transform(array[x]));
    }
    return mapped;
};

module.exports = map;