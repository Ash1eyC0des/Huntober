// Day 1
function myExampleFunction(arr) {
	if (arr === null || arr.length === 0 || arr[0].length === 0) return arr

	if (arr.length >= 10) arr.push('maximum')

	if (arr[0] === 'must be maximum') {
		arr.push('failure')
	} else {
		arr.push('success')
	}

	return arr
}
