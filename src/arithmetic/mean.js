const reduce = require('../tools/reduce');

function mean(array, initialValue = 0) {
    return reduce(array, initialValue) / array.length
}

module.exports = mean;