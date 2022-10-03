/*************************************************
 *  Part 2, evaluate our own calculation string
 *************************************************/
//q4e = question for eric
//TODO = solo(ish) biz
//elDevSenior = eric
//0. make appropriate comments so you don't get donked up
//1. make a fucntion that will seperate out left side, right side, and operators named 'leftRightSeperatorSolo'
//2. make function 'numberCruncher that will call 'leftRightSeperatorSolo' when a string has more than one
//----operator, when string only has one operator it should crunch them numbers, return the number to an array

//goal equation to be reduced '7+3*5^2+3/2-5'
let numsSolo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let powersSolo = ["^"]
let multiplyDivideSolo = ["*", "/"]
let addSubtractSolo = ["+", "-"]
let allOperatorsSolo = [...powersSolo, multiplyDivideSolo, addSubtractSolo]

//Will return the indexOf for a string's operator position
let operatorFinderSolo = (stringSolo) => {
	for (let i = 0; i < powersSolo.length; i++) {
		let powersResultSolo = stringSolo.indexOf(powersSolo[i])
		if (powersResultSolo != -1) {
			return powersResultSolo
		}
	}
	for (let i = 0; i < multiplyDivideSolo.length; i++) {
		let multiplyDivideResultSolo = stringSolo.indexOf(multiplyDivideSolo[i])
		if (multiplyDivideResultSolo != -1) {
			return multiplyDivideResultSolo
		}
	}
	for (let i = 0; i < multiplyDivideSolo.length; i++) {
		let addsubtractResultSolo = stringSolo.indexOf(addSubtractSolo[i])
		if (addsubtractResultSolo != -1) {
			return addsubtractResultSolo
		}
	}
	return -1
}

//
let hasOperatorSolo = (stringSolo) => {
	for (let i = 0; i < stringSolo.length; i++) {
		if (allOperatorsSolo.includes(stringSolo[i])) {
			return true
		} else return false
	}
}

let calculateSolo = (stringSolo) => {
	let leftSideSolo = ""
	let rightSideSolo = ""
	let operatorSolo = ""
    if (hasOperatorSolo(stringSolo) = false) {
        return stringSolo
    }
    if (stringSolo === '') {
        throw new Error('string empty')
    }
    //return the string as an object w leftside rightside and operator
    let operatorIndexSolo = operatorFinderSolo(stringSolo)
    operatorSolo = stringSolo[operatorIndexSolo]
    leftSideSolo = stringSolo.slice(0,operatorIndexSolo)
    rightSideSolo = stringSolo.slice(operatorIndexSolo +1, stringSolo.length)
    leftSideSolo = calculateSolo(leftSideSolo)
    rightSideSolo = calculateSolo(rightSideSolo)
    leftSideSolo = calculateSolo(leftSideSolo)
    rightSideSolo = calculateSolo(rightSideSolo)
    return {
        leftSideSolo,
        rightSideSolo,
        operatorSolo,
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
