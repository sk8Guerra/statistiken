var _orderAsc = require('./src/tools/order/asc');

const mean = require('./src/arithmetic/mean');
var _mean = function (array) {
    return mean(array, 0);
}

var _median = require('./src/arithmetic/median');

var _mode = require('./src/arithmetic/mode');

module.exports = {
    orderAsc: _orderAsc,
    mean: _mean,
    median: _median,
    mode: _mode
}