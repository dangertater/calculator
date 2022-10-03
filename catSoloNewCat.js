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

// let numberCruncher = (stringSolo) => {}
// seperates string into the left right and operator strings, puts them in object.
//determines if left side or right side has operators, then
let leftRightSeperatorSolo = (stringSolo) => {
	let leftSideSolo = ""
	let rightSideSolo = ""
	let operatorsSolo = ""
	//incase there is no operator
	if (!hasOperatorSolo(stringSolo)) {
		return stringSolo
	}
	//incase string is empty
	if (stringSolo === "") {
		throw new Error("you fucked it up no string")
	}

	for (let i = 0; i < stringSolo.length; i++) {
		for (let i = 0; i < stringSolo.length; i++) {
			if (stringSolo[i] === "^") {
				operatorsSolo = stringSolo.slice(i, i + 1)
				leftSideSolo = stringSolo.slice(0, i)
				rightSideSolo = stringSolo.slice(i + 1)
				leftSideSolo = leftRightSeperatorSolo(leftSideSolo)
				rightSideSolo = leftRightSeperatorSolo(rightSideSolo)
				let obj = {
					leftSideSolo,
					rightSideSolo,
					operatorsSolo,
				}
				return obj
			}
		}
		for (let i = 0; i < stringSolo.length; i++) {
			if (stringSolo[i] === "*" || stringSolo[i] === "/") {
				operatorsSolo = stringSolo.slice(i, i + 1)
				leftSideSolo = stringSolo.slice(0, i)
				rightSideSolo = stringSolo.slice(i + 1)
				leftSideSolo = leftRightSeperatorSolo(leftSideSolo)
				rightSideSolo = leftRightSeperatorSolo(rightSideSolo)
				let obj = { leftSideSolo, rightSideSolo, operatorsSolo }
				return obj
			}
		}
		for (let i = 0; i < stringSolo.length; i++) {
			if (stringSolo[i] === "+" || stringSolo[i] === "-") {
				operatorsSolo = stringSolo.slice(i, i + 1)
				leftSideSolo = stringSolo.slice(0, i)
				rightSideSolo = stringSolo.slice(i + 1)
				leftSideSolo = leftRightSeperatorSolo(leftSideSolo)
				rightSideSolo = leftRightSeperatorSolo(rightSideSolo)
				let obj = { leftSideSolo, rightSideSolo, operatorsSolo }
				return obj
			}
		}
	}
}

// }
// leftRightSeperatorSolo('2+4+6+8')
// leftRightSeperatorSolo('2+4/6^8')
// leftRightSeperatorSolo('2+4/6^8+4')
