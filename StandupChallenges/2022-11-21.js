// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeDuplicates(str) {
	return str
		.split(' ')
		.filter((e, i, a) => e !== a[i - 1])
		.join(' ')
}

console.log(
	removeDuplicates(
		'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
	)
)
