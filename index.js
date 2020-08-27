"use strict"

module.exports = (array, predicate) => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`)
	}

	if (typeof predicate !== "function") {
		throw new TypeError(`Expected a function, got ${typeof predicate}`)
	}

	let index = array.length

	while (index--) {
		if (predicate(array[index], index, array)) {
			return index
		}
	}

	return -1
}
