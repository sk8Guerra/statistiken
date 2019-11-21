const stddev = require('./stddev');
const mean = require('../arithmetic/mean');

function coevar(array) {
    return (stddev(array) / mean(array, 0)) * 100;
}

module.exports = coevar;