// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function dup(arr) {
	function removeDuplicates(str) {
		return str
			.split('')
			.filter((e, i, a) => e !== a[i - 1])
			.join('')
	}

	return arr.map((str) => removeDuplicates(str))
}

console.log(dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']))
console.log(dup(['abracadabra', 'allottee', 'assessee']))
console.log(dup(['kelless', 'keenness']))
