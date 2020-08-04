function isArrayOfNumbers (array) {
  for (let number = 0; number < array.length; number++) {
    if (isNumber(array[number])) continue;
    throw new Error('Some piece of data is not a number.');
  }
  return true
}

function isNumber (number) {
  if (typeof number === 'number') {
    return number - number === 0;
  }
  if (typeof number === 'string' && number.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+number) : isFinite(+number);
  }
  return false;
};

function isOdd(value) {
  const n = Math.abs(value);
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error('value exceeds maximum safe integer');
  }
  return (n % 2) === 1;
};

function roundUp(number) {
  return Math.ceil(number)
}

function roundDown(number) {
  return Math.floor(number)
}

module.exports = {
  isNumber,
  isOdd,
  isArrayOfNumbers,
  roundUp,
  roundDown
}