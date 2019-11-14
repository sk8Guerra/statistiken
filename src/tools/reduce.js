function reducer (acc, item) { 
    return acc + item
}

function reduce(array, initialValue) {
    return array.reduce(reducer, initialValue);
}

module.exports = reduce;

