var _orderAsc = require('./src/tools/order/asc');

var _mean = require('./src/arithmetic/mean');

var _median = require('./src/arithmetic/median');

var _mode = require('./src/arithmetic/mode');

var _stddev = require('./src/dispersion/stddev');

var _variance = require('./src/dispersion/variance');

var _coevar = require('./src/dispersion/coevar');

module.exports = {
    orderAsc: _orderAsc,
    mean: _mean,
    median: _median,
    mode: _mode,
    stddev: _stddev,
    variance: _variance,
    coevar: _coevar
}