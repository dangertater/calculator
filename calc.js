/*************************************************
 *  Part 2, evaluate our own calculation string
 *************************************************/
// Create a function, that accepts a string, which is a valid thing to calculate
// EG '11+15'

// for each character, add it to the left side, as long as we haven't found an action
// if we have found an action, add it to the right side
// Loop through each character of the string
// Create a left side, and a right side, and an action
// We need to do our own calculations here
let nums1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let actions1 = ["+", "-", "*", "/", "^"]

let calculate = (string) => {
	let leftSide = ""
	let rightSide = ""
	let action = ""
	for (let i = 0; i < string.length; i++) {
		if (actions1.includes(string[i])) {
			action = action + string[i]
		} else if (action.length === 0) {
			leftSide = leftSide + string[i]
		} else {
			rightSide = rightSide + string[i]
		}
	}
	return {
		leftSide,
		rightSide,
		action,
	}
}

window.calculate = calculate
console.log(calculate("11+15"))
console.log(calculate("12-159"))
console.log(calculate("123+662"))
console.log(calculate("11/15"))

//if (action.length > 0) {
// rightSide = rightSide + string[i]
// }
