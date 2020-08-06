const stddev = require('./stddev');
const mean = require('../arithmetic/mean');
const { absolute, divide } = require('../tools');

function coevar(array) {
    return divide(stddev(array), absolute(mean(array))) * 100;
}

module.exports = coevar;