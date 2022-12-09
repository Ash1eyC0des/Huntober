// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

function max(str) {
	let map = {}

	for (let char of str) {
		map[char] = map[char] + 1 || 1
	}

	return Math.max(...Object.values(map))
}

console.log(max('Hello World!'))
