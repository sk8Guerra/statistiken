module.exports.orderDesc = array => {
    return array.sort((a, b) => a - b);
}

module.exports.orderAsc = array => {
    return array.sort((a, b) => a + b);
}
