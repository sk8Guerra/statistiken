const asc = require('./src/tools/order/asc');
const mean = require('./src/arithmetic/mean');
const median = require('./src/arithmetic/median');
const mode = require('./src/arithmetic/mode');

module.exports.orderAsc = function (array) {
    return asc(array);
}

module.exports.mean = function (array) {
    return mean(array, 0);
}

module.exports.median = function (array) {
    return median(array);
}

module.exports.mode = function (array) {
    return mode(array);
}




