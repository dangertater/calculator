/*************************************************
 *  Part 2, evaluate our own calculation string
 *************************************************/
// Create a function, that accepts a string, which is a valid thing to calculate
// EG '11+15'

//goal equation to be reduced '7+3*5^2+3/2-5'
let numsSolo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let powersSolo = ["^"]
let multiplyDivideSolo = ["*", "/"]
let addSubtractSolo = ["+", "-"]
let leftSideSolo = []
let rightSideSolo = []
let operatorsSolo = []

//TODO after it's all legit, get 'leftSideSolo, rightSideSolo, and operatorsSolo, out of the global array
//------because of memory problems, do it or explain why it can't happen to elDevSenior

//seperates string into the different arrays
let leftRightSeperatorSolo = (stringSolo) => {
	for (let i = 0; i < stringSolo.length; i++) {
		if (stringSolo[i] === "^") {
			rightSideSolo = rightSideSolo + stringSolo.slice(stringSolo[i + 1])
			leftSideSolo =
				leftSideSolo + stringSolo.slice(stringSolo[0], stringSolo[i - 1])
			operatorsSolo =
				operatorsSolo + stringSolo.slice(stringSolo[i], stringSolo[i + 1])
		}
		if (stringSolo[i] === "*" || stringSolo[i] === "/") {
			rightSideSolo = rightSideSolo + stringSolo.slice(stringSolo[i])
			leftSideSolo =
				leftSideSolo + stringSolo.slice(stringSolo[0], stringSolo[i - 1])
			operatorsSolo =
				operatorSolo + stringSolo.slice(stringSolo[i], stringSolo[i + 1])
		}
		if (stringSolo[i] === "+" || stringSolo[i] === "-") {
			rightSideSolo = rightSideSolo + stringSolo.slice(stringSolo[i])
			leftSideSolo =
				leftSideSolo + stringSolo.slice(stringSolo[0], stringSolo[i - 1])
			operatorsSolo = operatorsSolo + stringSolo.slice(stringSolo[i + 1])
		}
	}
}

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
//------------------------------------------------------------------

//------------------------------------------------------------------
//return the indexOf the highest order operator
//pseudocode - we have index of, indexOf returns -1 if it doesn't find substring being looked for
//----otherwise returns the index (element number) of substrings number
//----find the operators in order of operation sequence
//------------------------------------------------------------------

//------------------------------------------------------------------
//seperates the sections of a string into different strings

//------------------------------------------------------------------
//can keep left right and action, or perform calculation and return the number
//or recursivly loop through our key value pairs doing the math as you go
