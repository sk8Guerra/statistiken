const asc = require('../tools/order/asc');
const isFloat = require('../tools/types');
const mean =  require('../arithmetic/mean');

class PositionMeasurements {
    
    constructor (numbers) {
        this.numbers = numbers || []; 
    }

    quartile(quartileNumber) {
        
    }

    decile(decileNumber) {
        return verify(calculate(decileNumber, asc(this.numbers).length, 10), this.numbers);
    }

    percentile(percentileNumber) {
        return verify(calculate(percentileNumber, asc(this.numbers).length, 100), this.numbers);
    }
}


function calculate(positionNumber, amountOfNumbers, position) {
    return positionNumber * amountOfNumbers / position;
}

function verify(position, numbers) {
    if (isFloat(position)) {
        return numbers[Math.round(position) - 1];
    } else {
        return numbers[decile];
    }
}

module.exports = PositionMeasurements;
