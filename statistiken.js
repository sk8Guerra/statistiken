const map = require('./src/tools/map');

module.exports.orderAsc = array => {
    return array.sort((a, b) => a - b);
}

module.exports.orderDesc = array => {
    return array.sort((a, b) => b - a);
};
