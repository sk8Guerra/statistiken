const decile = require('./decile');
const percentile = require('./percentile');

class PositionMeasurements {
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

module.exports = PositionMeasurements;
