const variance = require('./variance');

function stddev(array) {
    return Math.sqrt(variance(array));
}

module.exports = stddev;