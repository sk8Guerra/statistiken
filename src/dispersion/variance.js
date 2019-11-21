const reduce = require('../tools/reduce');
const map = require('../tools/map');
const mean = require('../arithmetic/mean');

function variance(array) {
    var mn = mean(array, 0);
    return reduce(map(array, element => Math.pow((element - mn), 2)), 0) / (array.length - 1);
}

module.exports = variance;