function reducer (acc, item) { 
    return acc + item
}

function reduce(array, initialValue = 0) {
    return array.reduce(reducer, initialValue);
}

module.exports = reduce;

