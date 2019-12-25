const verify = require('./verify');
const calculate = require('./calculate');
const asc = require('../tools/order/asc');

function percentile(percentileNumber, numbers) {
    return verify(calculate(percentileNumber, asc(numbers).length, 100), numbers);
}

module.exports = percentile;