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

//around begining of let calc, find the lower order of operations
//----determine if there is more than one action
//----slice (.slice) at that point
//----slice will make 2 strings (og in the void), have a L and R string at the palce with the highest operator
//----you do all of that ^ if there is more than one operator
//----then take left string and right string and set those to calculate function recursively
//----special cases if no operators (will happen on last digit probs), return the string aka just numbers
let nums1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let powers = ["^"]
let multiplyDivide = ["*", "/"]
let addSubtract = ["+", "-"]
let hasOperators = (string) => {
	for (let i = 0; i < string.length; i++) {
		if (powers.includes(string[i])) {
			return true
		}
		if (multiplyDivide.includes(string[i])) {
			return true
		}
		if (addSubtract.includes(string[i])) {
			return true
		}
	}
	return false
}
window.hasOperators = hasOperators

//return the indexOf the highest order operator, (then use .slice). this should
//----return a number
//pseudocode - we have index of, indexOf returns -1 if it doesn't find substring being looked for
//----otherwise returns the index (element number) of substrings number
//----find the operators in order of operation sequence
let sliceBoi = (string) => {
	for (let i = 0; i < powers.length; i++) {
		let powersResult = string.indexOf(powers[i])
		if (powersResult !== -1) return powersResult
	}
	for (let i = 0; i < multiplyDivide.length; i++) {
		let multiplyDivideResult = string.indexOf(multiplyDivide[i])
		if (multiplyDivideResult !== -1) return multiplyDivideResult
	}
	for (let i = 0; i < addSubtract.length; i++) {
		let addSubtractResult = string.indexOf(addSubtract[i])
		if (addSubtractResult !== -1) return addSubtractResult
	}
	// -1 below to simulate index of (will fail test)
	return -1
}
window.sliceBoi = sliceBoi
//seperates the sections of a string into different strings
let calculate = (string) => {
	//basecases =
	//1 - there are no operators, return string
	if (!hasOperators(string)) {
		return string
	}
	//2 - string is empty, could throw error, other people are dicks
	if (string === "") {
		throw new Error("heck, string empty")
	}
	let leftSide = ""
	let rightSide = ""
	//TODO clean up by makin 'action' into operator, will need to update test.js
	let action = ""
	// create new function that will find the correct place to slice
	//----find index of operator (action here), slice based on that.
	let operatorIndex = sliceBoi(string)
	action = string[operatorIndex]

	return {
		leftSide,
		rightSide,
		action,
	}
}

window.calculate = calculate

//----bullshit from going down a rabbit hole----
// //takes string with multiple actions and creates simpler string with just one action
// let breakItDown = (unbrokenString) => {
// 	let rightSide = ""
// 	let leftSide = ""
// 	let breakItDownActions = ""
// 	//adds all actions of unbrokenString into a single string
// 	for (let i = 0; i < unbrokenString.length; i++) {
// 		if (actions.includes(unbrokenString[i])) {
// 			breakItDownActions = breakItDownActions + unbrokenString[i]
// 		}
// 	}
// 	//takes unbrokenString and isolates it's first 'equation' into it's own string called
// 	//----'leftSide', and the remainder of unbrokenString will be 'rightSide'
// 	for (let i = 0; i < breakItDownActions.length - 1; i++) {
// 		let act = breakItDownActions[i]
// 		for (let j = 0; j < unbrokenString.length; j++) {
// 			if (act === unbrokenString[j]) {
// 				leftSide =
// 					unbrokenString[j - 1] + unbrokenString[j] + unbrokenString[j + 1]
// 			}
// 		}
// 	}
// }

//----worked when we didn't have more than one operator or sucsessive digit in the string
// if (hasOperators(string[i])) {
// 	action = string[i]
// } else if (action.length === 0) {
// 	leftSide = calculate(string[i])
// } else {
// 	rightSide = rightSide + string[i]
// }
