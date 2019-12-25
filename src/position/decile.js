const verify = require('./verify');
const calculate = require('./calculate');
const asc = require('../tools/order/asc');

function decile(decileNumber, numbers) {
    return verify(calculate(decileNumber, asc(numbers).length, 10), numbers);
}

module.exports = decile;