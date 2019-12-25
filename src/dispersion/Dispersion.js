const stddev = require('./stddev');
const variance = require('./variance');
const coevar = require('./coevar');
 
class Dispersion {
    constructor (numbers) {
        this.numbers = numbers || [];
    }

    variance() {
        return variance(this.numbers);
    }

    stddev() {
        return stddev(this.numbers);
    }

    coevar() {
        return coevar(this.numbers);
    }
}

module.exports = Dispersion;