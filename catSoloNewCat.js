let numsSolo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let powersSolo = ["^"]
let multiplyDivideSolo = ["*", "/"]
let addSubtractSolo = ["+", "-"]
let allOperatorsSolo = [
	...powersSolo,
	...multiplyDivideSolo,
	...addSubtractSolo,
]

let hasOperatorSolo = (leString) => {
	for (let i = 0; i < leString.length; i++) {
		if (allOperatorsSolo.includes(leString[i]) === true) return true
	}
}
let sliceAndRedo = (stringSolo, i) => {
	let operatorsSolo = stringSolo.slice(i, i + 1)
	let leftSideSolo = stringSolo.slice(0, i)
	let rightSideSolo = stringSolo.slice(i + 1)
	leftSideSolo = leftRightSeperatorSolo(leftSideSolo)
	rightSideSolo = leftRightSeperatorSolo(rightSideSolo)
	let obj = { leftSideSolo, rightSideSolo, operatorsSolo }
	return obj
}
// let numberCruncher = (stringSolo) => {}
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
		if (stringSolo[i] === "^") {
			return sliceAndRedo(stringSolo, i)
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
	for (let i = 0; i < stringSolo.length; i++) {
		if (stringSolo[i] === "*" || stringSolo[i] === "/") {
			return sliceAndRedo(stringSolo, i)
		}
	}
	for (let i = 0; i < stringSolo.length; i++) {
		if (stringSolo[i] === "+" || stringSolo[i] === "-") {
			return sliceAndRedo(stringSolo, i)
		}
	}
}

//goal, take the objects reverse engineer to a single number (solution), dont forget order of operations

// }
// leftRightSeperatorSolo('2+4+6+8')
// leftRightSeperatorSolo('2+4/6^8')
// leftRightSeperatorSolo('2+4/6^8+4')
