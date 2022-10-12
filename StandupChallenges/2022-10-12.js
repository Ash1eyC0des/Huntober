// P - Positive integer, no special chars, no blank
// R - An array of numbers from 1 to num. If num is divisible by 3, return 'Fizz' instead of num, If divisible by 5, return 'Buzz' instead. If divisible by 3 & 5, return 'FizzBuzz' instead of num
// E - [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
// P -

function fizzBuzz(num) {
	let result = []
	for (let i = 1; i <= num; i++) {
		if (!(i % 3) && !(i % 5)) {
			result.push('FizzBuzz')
		} else if (!(i % 3)) {
			result.push('Fizz')
		} else if (!(i % 5)) {
			result.push('Buzz')
		} else {
			result.push(i)
		}
	}
	return result
}

console.log(fizzBuzz(100))
