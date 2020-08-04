const asc = require('../tools/order/asc');
const reduce = require('../tools/reduce');
const {
  isArrayOfNumbers,
  isOdd,
  roundDown,
  roundUp
} = require('../tools');

function median(array) {
    isArrayOfNumbers(array);
    const ordened = asc(array);
    if (isOdd(array.length)) {
      return ordened[getPosition(array.length) - 1];
    } else {
        return addWhenEven(
          ordened[roundDown(getPosition(array.length) - 1)],
          ordened[roundUp(getPosition(array.length) - 1)]
        );
    }
}

function getPosition(length) {
    return (length + 1) / 2;
}

function addWhenEven(...numbers) {
  return reduce(numbers) / 2
}

module.exports = median;