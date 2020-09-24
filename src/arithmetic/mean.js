const reduce = require('../tools/reduce');
const { divide, length } = require('../tools');

function mean(array, initialValue) {
  return divide(reduce(array, initialValue), length(array));
}

module.exports = mean;