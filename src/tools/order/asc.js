const quickSort = require('./quickSort');

function asc(array) {
    return quickSort.quickSort(array);
}
module.exports = asc;