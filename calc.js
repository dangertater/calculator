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
let multDivide = ["*", "/"]
let addSubtract = ["+", "-"]
let hasOperators = (string) => {
	for (let i = 0; i < string.length; i++) {
		if (powers.includes(string[i])) {
			return true
		}
		if (multDivide.includes(string[i])) {
			return true
		}
		if (addSubtract.includes(string[i])) {
			return true
		}
	}
	return false
}

window.hasOperators = hasOperators
//seperates the sections of a string into different strings
let calculate = (string) => {
	let leftSide = ""
	let rightSide = ""
	let action = ""
	for (let i = 0; i < string.length; i++) {
		if (hasOperators(string[i])) {
			action = string[i]
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
