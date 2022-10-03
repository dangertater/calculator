/*************************************************
 *  Part 2, evaluate our own calculation string
 *************************************************/
// Create a function, that accepts a string, which is a valid thing to calculate
// EG '11+15'

let numsSolo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let powersSolo = ["^"]
let multiplyDivideSolo = ["*", "/"]
let addSubtractSolo = ["+", "-"]
let leftSideSolo = []
let rightSideSolo = []
let operatorsSolo = []

let calculateSolo = (stringSolo) => {
	let leftSideSolo = []
	let rightSideSolo = []
	let operatorsSolo = []
	for (let i = 0; i < stringSolo.length; i++) {}
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
