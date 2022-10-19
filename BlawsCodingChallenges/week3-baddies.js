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

// Day 2

function getDaysfromCurrent(date, currentDate = new Date()) {
	return Math.ceil(
		Math.abs(currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
	)
}

// Given two dates, determines which one is further away from today
function whichDateIsFurtherAway(date1, date2) {
	const daysFromCurrent1 = getDaysfromCurrent(date1)
	const daysFromCurrent2 = getDaysfromCurrent(date2)
	const date1Str = date1.toDateString()
	const date2Str = date2.toDateString()
	if (daysFromCurrent1 * 2 <= daysFromCurrent2) {
		return `If you thought ${date1Str} was a long wait, wait until you see how long it is until ${date2Str}.`
	} else if (daysFromCurrent1 < daysFromCurrent2) {
		return `Don't worry, ${date2Str} isn't too much farther away than ${date1Str} in the scheme of things.`
	} else if (daysFromCurrent1 === daysFromCurrent2) {
		return `They're the same number of days away!`
	} else {
		return `You know ${date1Str} is closer, right?`
	}
}

// Given two dates, determines which one is further away from today AND how many times further away it is
function howFarAwayIsDate(date1, date2) {
	const daysFromCurrent1 = getDaysfromCurrent(date1)
	const daysFromCurrent2 = getDaysfromCurrent(date2)
	const date1Str = date1.toDateString()
	const date2Str = date2.toDateString()
	if (daysFromCurrent1 < daysFromCurrent2) {
		const timesAway = Math.floor(daysFromCurrent2 / daysFromCurrent1)
		return `Looks like ${date2Str} is ${timesAway} times farther away than ${date1Str}.`
	} else if (daysFromCurrent1 === daysFromCurrent2) {
		return `Same exact date there, mate.`
	} else {
		const timesAway = Math.floor(daysFromCurrent1 / daysFromCurrent2)
		return `Looks like ${date1Str} is ${timesAway} times farther away than ${date2Str}.`
	}
}

// Given two dates, determines how many days left until each.
function daysLeft(date1, date2) {
	const daysFromCurrent1 = getDaysfromCurrent(date1)
	const daysFromCurrent2 = getDaysfromCurrent(date2)
	const date1Str = date1.toDateString()
	const date2Str = date2.toDateString()
	return `You have ${daysFromCurrent1} days left until ${date1Str}, and ${daysFromCurrent2} days left until ${date2Str}.`
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022, 09, 26)
const dateB = new Date(2022, 11, 25)

// console.log(whichDateIsFurtherAway(dateA, dateB))
// console.log(howFarAwayIsDate(dateA, dateB))
// console.log(daysLeft(dateA, dateB))
