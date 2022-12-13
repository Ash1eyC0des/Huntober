// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function findMajorityElement(arr) {
	const ele = {}

	for (let num of arr) {
		ele[num] = ele[num] + 1 || 1
		if (ele[num] > arr.length / 2) {
			return num
		}
	}
}

function findMajorityElement(arr) {
	arr = arr.sort((a, b) => a - b)
	const halfInd = Math.ceil(arr.length / 2) - 1
	return arr[halfInd]
}

console.log(findMajorityElement([3, 2, 3]))
console.log(findMajorityElement([2, 2, 1, 1, 2, 4, 4, 4, 4, 4, 4]))
