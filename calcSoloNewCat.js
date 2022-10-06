let numsSolo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let powersSolo = ["^"]
let multiplyDivideSolo = ["*", "/"]
let addSubtractSolo = ["+", "-"]
let allOperatorsSolo = [
	...powersSolo,
	...multiplyDivideSolo,
	...addSubtractSolo,
]

//determines if string has an operator
let hasOperatorSolo = (leString) => {
	for (let i = 0; i < leString.length; i++) {
		if (allOperatorsSolo.includes(leString[i]) === true) return true
	}
}
//
let sliceAndRedoSolo = (stringSolo, i) => {
	let operatorsSolo = stringSolo.slice(i, i + 1)
	let leftSideSolo = stringSolo.slice(0, i)
	let rightSideSolo = stringSolo.slice(i + 1)
	leftSideSolo = leftRightSeperatorSolo(leftSideSolo)
	rightSideSolo = leftRightSeperatorSolo(rightSideSolo)
	let obj = { leftSideSolo, rightSideSolo, operatorsSolo }
	return obj
}
// seperates string into the left right and operator strings, puts them in object.
//determines if left side or right side has operators, then
let leftRightSeperatorSolo = (stringSolo) => {
	//incase there is no operator
	if (!hasOperatorSolo(stringSolo)) {
		return stringSolo
	}
	//incase string is empty
	if (stringSolo === "") {
		throw new Error("you fucked it up no string")
	}
	for (let i = 0; i < stringSolo.length; i++) {
		if (stringSolo[i] === "+" || stringSolo[i] === "-") {
			return sliceAndRedoSolo(stringSolo, i)
		}
	}
	for (let i = 0; i < stringSolo.length; i++) {
		if (stringSolo[i] === "*" || stringSolo[i] === "/") {
			return sliceAndRedoSolo(stringSolo, i)
		}
	}
	for (let i = 0; i < stringSolo.length; i++) {
		if (stringSolo[i] === "^") {
			return sliceAndRedoSolo(stringSolo, i)
		}
	}
}
// numberCruncher will be a recursive function, taking parsed object from leftRightSeperatorSolo(),
//----recursivly resolve left and right with the operator
let numberCruncher = (parsedSolo) => {
	// baseCase1
	if (typeof parsedSolo === "string") return Number(parsedSolo)
	//q4e i don't beleive the below line of code is necessary anymore?
	// if (typeof parsedSolo === "object") {}
	// left is going to be an object, or a string
	// if left/right is a string, turn it into a number
	// if left/right is an object, turn it into a number using number cruncher
	// now both right and left are numbers,
	// do the operation specified and return it.
	const left = numberCruncher(parsedSolo.leftSideSolo)
	const right = numberCruncher(parsedSolo.rightSideSolo)
	const op = parsedSolo.operatorsSolo
	if (op === "^") return Math.pow(left, right)
	if (op === "*") return left * right
	if (op === "/") return left / right
	if (op === "+") return left + right
	if (op === "-") return left - right
}
window.numberCruncher = numberCruncher

//goal, take the objects reverse engineer to a single number (solution)

// }
// leftRightSeperatorSolo('2+4+6+8')
// leftRightSeperatorSolo('2+4/6^8')
// leftRightSeperatorSolo('2+4/6^8-4')

//1. review all the shit done this morning
//2. connect calcSoloNewCat to indexSolo
//3. use calcSoloNewCat functions to link with the calculator (functions in calcSolo.js)
//4. goal will be all things passing in qunit and functioning on calculator webpage
