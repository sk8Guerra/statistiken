const mean = require('./src/arithmetic/mean');
const median = require('./src/arithmetic/median');
const mode = require('./src/arithmetic/mode');

var _orderAsc = require('./src/tools/order/asc');

var _mean = function (array) {
    return mean(array, 0);
}

var _median = function (array) {
    return median(array);
}

var _mode = function (array) {
    return mode(array);
}

module.exports {
    orderAsc: _orderAsc,
    mean: _mean,
    median: _median,
    mode: _mode
}