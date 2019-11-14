const asc = require('./src/tools/order/asc');
const mean = require('./src/arithmetic/mean');

module.exports.orderAsc = function (array) {
    return asc(array);
}

module.exports.mean = function (array) {
    return mean(array, 0)
}

module.exports.median = function () {

}

module.exports.mode = function () {

}


