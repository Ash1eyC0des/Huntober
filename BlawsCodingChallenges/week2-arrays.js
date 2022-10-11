// Day 1
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

// checkEquality(arr1, arr2) // true
// checkEquality(arr1, arr3) // false
// checkEquality(arr1, arr4) // false
// etc.

// Day 2
function moveLeft(arr, val) {
	const valIndex = arr.indexOf(val)
	const leftOfValIndex = valIndex - 1
	if (valIndex !== 0) {
		arr.splice(leftOfValIndex, 2, val, arr[leftOfValIndex])
	}
	return arr
}

function moveRight(arr, val) {
	const valIndex = arr.indexOf(val)
	const rightOfValIndex = valIndex + 1
	if (valIndex !== arr.length - 1) {
		arr.splice(valIndex, 2, arr[rightOfValIndex], val)
	}
	return arr
}

const myArray = ['abc', 'xyz', 1, 2, 'Hey!']
// console.log(moveRight(myArray, 2))

// Day 3
function moveThingsAround(arr) {
	const containA = arr.filter((str) => str.includes('a'))
	const fourChars = arr.filter((str) => !str.includes('a') && str.length > 3)
	const allOthers = arr.filter((str) => !str.includes('a') && str.length <= 3)

	return containA.concat(allOthers, fourChars)
}

const myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// console.log(moveThingsAround(myArr))

// Day 4
// P - A nested array where outer array length = inner array length, a letter to move within the array - no nums or special chars
// R - Using twin functions - moveUp and moveDown, return the array with letter moved up or down to the previous or next inner array, swapping places with the value at the new location UNLESS the given letter is already at the first or last array
// E - myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// call move up function with 'h' and myGrid
// console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// P - if (index of array that includes letter is not zero or length-1) - indexOfLetter = targetValue, targetIndex = letterValue. Else, return array

function moveUpOneRow(arr, letter) {
	arr.forEach((innerArr, outerIndex) => {
		const innerIndex = innerArr.indexOf(letter)
		if (outerIndex !== 0 && innerIndex !== -1) {
			const targetArr = arr[outerIndex - 1]
			const targetLetter = targetArr[innerIndex]
			innerArr.splice(innerIndex, 1, targetLetter)
			targetArr.splice(innerIndex, 1, letter)
		}
	})
	return arr
}

function moveDownOneRow(arr, letter) {
	arr.forEach((innerArr, outerIndex) => {
		const innerIndex = innerArr.indexOf(letter)
		if (outerIndex !== innerArr.length - 1 && innerIndex !== -1) {
			const targetArr = arr[outerIndex + 1]
			const targetLetter = targetArr[innerIndex]
			innerArr.splice(innerIndex, 1, targetLetter)
			targetArr.splice(innerIndex, 1, letter)
		}
	})
	return arr
}

const myGrid = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
]

// console.log(moveDownOneRow(myGrid, 'e'))
