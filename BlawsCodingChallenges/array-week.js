function checkEquality(arr1, arr2) {
	if (arr1.length === arr2.length) {
		function countArrays(arr) {
			return arr.map((e) => Array.isArray(e)).filter(Boolean).length
		}
		if (countArrays(arr1) === countArrays(arr2)) {
			const matchingValues = arr1.map((e, i) => {
				if (Array.isArray(e) && Array.isArray(arr2[i])) {
					return e.every((ele, index) => ele === arr2[i][index])
				}
				return e === arr2[i]
			})
			return matchingValues.every((e) => e === true)
		} else {
			return false
		}
	}
}

// each of these arrays have 3 nested arrays of 3 strings each
const arr1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
]

const arr2 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
]
const arr3 = [
	['a', 'B', 'c'],
	['d', 'E', 'f'],
	['g', 'H', 'i'],
]
const arr4 = [
	['a', 'b', 'c'],
	['g', 'h', 'i'],
	['d', 'e', 'f'],
]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

console.log(checkEquality(arr1, arr2)) // true
// checkEquality(arr1, arr3) // false
// checkEquality(arr1, arr4) // false
// etc.
