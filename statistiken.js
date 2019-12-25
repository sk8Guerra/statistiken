var _orderAsc = require('./src/tools/order/asc');

var _mean = require('./src/arithmetic/mean');

var _median = require('./src/arithmetic/median');

var _mode = require('./src/arithmetic/mode');

var _stddev = require('./src/dispersion/stddev');

var _variance = require('./src/dispersion/variance');

var _coevar = require('./src/dispersion/coevar');

var _decile = require('./src/position/decile');

var _percentile = require('./src/position/percentile');

const Arithmetic = require('./src/arithmetic/Arithmetic');
const Dispersion = require('./src/dispersion/Dispersion');
const Position = require('./src/position/Position');

class Statistiken {
    constructor (numbers) {
        this.numbers = numbers || [];
    }

    arithmetic() {
        return new Arithmetic(this.numbers);
    }

    dispersion() {
        return new Dispersion(this.numbers);
    }

    position() {
        return new Position(this.numbers);
    }
}

module.exports = {
    Statistiken: Statistiken,
    orderAsc: _orderAsc,
    mean: _mean,
    median: _median,
    mode: _mode,
    stddev: _stddev,
    variance: _variance,
    coevar: _coevar,
    decile: _decile,
    percentile: _percentile
};