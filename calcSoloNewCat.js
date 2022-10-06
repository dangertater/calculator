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
			// let operatorsSolo = stringSolo.slice(i, i + 1)
			// let leftSideSolo = stringSolo.slice(0, i)
			// let rightSideSolo = stringSolo.slice(i + 1)
			// //below few lines are functionally the same, left for gettin learnt.
			// let rightSideSoloParsed = leftRightSeperatorSolo(rightSideSolo)
			// let obj = {
			// 	leftSideSolo: leftRightSeperatorSolo(leftSideSolo),
			// 	rightSideSolo: rightSideSoloParsed,
			// 	operatorsSolo,
			// }
			// return obj
		}
	}
}

// numberCruncher will be a recursive function, taking parsed object from leftRightSeperatorSolo(),
//----recursivly resolve left and right with the operator
let numberCruncher = (parsedSolo) => {
	//basecase1
	const twelve = Number("12")

	// For each side: if the side is a string, turn it into a number using Number()
	// if it's an object, turn it into a number using numberCruncher()
	// Once both sides are numbers, perform the operation indicated
	// return the answer
}

//goal, take the objects reverse engineer to a single number (solution)

// }
// leftRightSeperatorSolo('2+4+6+8')
// leftRightSeperatorSolo('2+4/6^8')
// leftRightSeperatorSolo('2+4/6^8+4')
