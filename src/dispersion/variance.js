const reduce = require('../tools/reduce');
const map = require('../tools/map');
const { square, length, divide } = require('../tools');
const mean = require('../arithmetic/mean');

function variance(array) {
    var mn = mean(array);
    return divide(reduce(map(array, element => square(element - mn))), (length(array) - 1));
}

module.exports = variance;