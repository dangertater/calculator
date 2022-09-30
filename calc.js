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
let actions = ["+", "-", "*", "/", "^"]
let hasOpertors = (string) => {
	if (string.includes(actions)) return true
}

postSliceLeft = ""
postSliceRight = ""

//takes string with multiple actions and creates simpler string with just one action
let breakItDown = (unbrokenString) => {
	let rightSide = ""
	let leftSide = ""
	let breakItDownActions = ""
	//adds all actions of unbrokenString into a single string
	for (let i = 0; i < unbrokenString.length; i++) {
		if (actions.includes(unbrokenString[i])) {
			breakItDownActions = breakItDownActions + unbrokenString[i]
		}
	}
	//takes unbrokenString and isolates it's first 'equation' into it's own string called
	//----'leftSide', and the remainder of unbrokenString will be 'rightSide'
	for (let i = 0; i < breakItDownActions.length - 1; i++) {
		let act = breakItDownActions[i]
		for (let j = 0; j < unbrokenString.length; j++) {
			if (act === unbrokenString[j]) {
				leftSide =
					unbrokenString[j - 1] + unbrokenString[j] + unbrokenString[j + 1]
			}
		}
	}
}

window.hasOpertors = hasOpertors
//seperates the sections of a string into different strings
let calculate = (string) => {
	let leftSide = ""
	let rightSide = ""
	let action = ""
	let mulitpleActions = ""
	for (let i = 0; i < string.length; i++) {
		if (actions.includes(string[i])) {
			mulitpleActions = mulitpleActions + string[i]
		}
	}
	if (mulitpleActions.length > 1) {
		return breakItDown(string)
	}
	for (let i = 0; i < string.length; i++) {
		if (actions.includes(string[i])) {
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
