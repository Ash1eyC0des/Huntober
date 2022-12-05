// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function countChars(str) {
	const chars = {}
	for (let i = 0; i < str.length; i++) {
		if (chars[str[i]]) {
			chars[str[i]] += 1
		} else {
			chars[str[i]] = 1
		}
	}
	return chars
}

console.log(countChars('leonnoel'))
console.log(countChars('hamburger'))
console.log(countChars(''))
