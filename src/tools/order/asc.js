const quickSort = require('./quickSort');

function asc(array) {
    return quickSort.quickSort(array, 0, array.length - 1);
}

module.exports = asc;