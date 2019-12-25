const isFloat = require('../tools/types');

function verify(position, numbers) {
    if (isFloat(position)) {
        let toReturn = numbers[Math.round(position) - 1]
        return typeof toReturn === 'undefined' ? numbers[Math.round(position)] : toReturn;
    } else {
        return numbers[decile];
    }
}

module.exports = verify;