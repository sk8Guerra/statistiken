const mean = require('./mean');
const median = require('./median');
const mode = require('./mode');

class Arithmetic {
    constructor(numbers) {
        this.numbers = numbers || [];
    }

    mean(initialValue = 0) {
        return mean(this.numbers, initialValue);
    }

    median() {
        return median(this.numbers);
    }

    mode() {
        return mode(this.numbers);
    }
}

module.exports = Arithmetic;