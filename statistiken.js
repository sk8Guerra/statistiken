const map = require('./src/tools/map');
const orderAsc = require('./src/tools/orderAsc')

module.exports.orderAsc = array => {
    return orderAsc(array);
}

module.exports.orderDesc = array => {
    return array.sort((a, b) => b - a);
};
