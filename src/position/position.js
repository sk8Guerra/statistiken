const decile = require('./decile');
const percentile = require('./percentile');

class Position {
    constructor (numbers) {
        this.numbers = numbers || []; 
    }

    quartile(quartileNumber) {
        
    }

    decile(decileNumber) {
        return decile(decileNumber, this.numbers);
    }

    percentile(percentileNumber) {
        return percentile(percentileNumber, this.numbers);
    }
}

module.exports = Position;
