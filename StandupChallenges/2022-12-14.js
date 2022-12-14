// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

function ransomNote(note) {
	const magazine =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'.split(
			' '
		)
	note = note.split(' ')
	const wordCount = {}

	for (let word of magazine) {
		wordCount[word] = wordCount[word] + 1 || 1
	}

	for (let word of note) {
		if (!wordCount[word]) {
			return false
		} else {
			wordCount[word] -= 1
		}
	}

	return true
}

console.log(ransomNote('sit ad est sint'))
console.log(ransomNote('sit ad est love'))
console.log(ransomNote('sit ad est sint in in'))
console.log(ransomNote('sit ad est sint in in in in'))
