// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function findDups(nums) {
	const numCount = {}

	for (let num of nums) {
		if (numCount[num]) {
			return true
		} else {
			numCount[num] = 1
		}
	}

	return false
}

console.log(findDups([1, 2, 3, 1]))
console.log(findDups([1, 2, 3, 4]))
console.log(findDups([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
