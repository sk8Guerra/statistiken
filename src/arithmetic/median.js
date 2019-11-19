const asc = require('../tools/order/asc');

function median(array) {
    let ordened = asc(array);
    return ordened[position(array.length) - 1];
}

function position(length) {
    return (length + 1) / 2;
}

module.exports = median;