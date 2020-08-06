const reduce = require('../tools/reduce');
const map = require('../tools/map');
const { length, divide, absolute } = require('../tools');
const mean = require('../arithmetic/mean');

function avgdev(array) {
    var mn = mean(array);
    return divide(reduce(map(array, element => absolute(element - mn))), length(array));
}

module.exports = avgdev;