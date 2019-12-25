const reduce = require('../tools/reduce');

function mean(array, initialValue) {
    return reduce(array, initialValue) / array.length
}

module.exports = mean;