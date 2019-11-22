const reduce = require('../tools/reduce');
const map = require('../tools/map');
const mean = require('../arithmetic/mean');

function variance(array) {
    var mn = mean(array);
    return reduce(map(array, element => (element - mn) * (element - mn))) / (array.length - 1);
}

module.exports = variance;