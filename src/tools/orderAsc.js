function asc(array) {
	if (array.length <= 1) { 
		return array;
	} 
	let left = [];
	let right = [];
	let newArray = [];
	let pivot = array.pop();
	let length = array.length;

	for (let i = 0; i < length; i++) {
		if (array[i] <= pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return newArray.concat(asc(left), pivot, asc(right));
};
module.exports = asc;