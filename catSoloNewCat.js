let numsSolo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let powersSolo = ["^"]
let multiplyDivideSolo = ["*", "/"]
let addSubtractSolo = ["+", "-"]
let allOperatorsSolo = [...powersSolo, multiplyDivideSolo, addSubtractSolo]

// seperates string into the different arrays
let leftRightSeperatorSolo = (stringSolo) => {
	let leftSideSolo = ""
	let rightSideSolo = ""
	let operatorsSolo = ""
	// for (let i = 0; i < stringSolo.length; i++) {
	// 	for (let i = 0; i < stringSolo.length; i++) {
	// 		if (stringSolo[i] === "^") {
	// 			rightSideSolo = stringSolo.slice()
	// 			leftSideSolo = stringSolo.slice()
	// 			operatorsSolo = stringSolo.slice()
	// 			return { leftSideSolo, rightSideSolo, operatorsSolo }
	// 		}
	// 	}
	// 	for (let i = 0; i < stringSolo.length; i++) {
	// 		if (stringSolo[i] === "*" || stringSolo[i] === "/") {
	// 			rightSideSolo = stringSolo.slice()
	// 			leftSideSolo = stringSolo.slice()
	// 			operatorsSolo = stringSolo.slice()
	// 			return { leftSideSolo, rightSideSolo, operatorsSolo }
	// 		}
	// 	}
	for (let i = 0; i < stringSolo.length; i++) {
		if (stringSolo[i] === "+" || stringSolo[i] === "-") {
			operatorsSolo = stringSolo.slice(i, i + 1)
			rightSideSolo = stringSolo.slice(i + 1)
			leftSideSolo = stringSolo.slice(0, i)
			return { leftSideSolo, rightSideSolo, operatorsSolo }
		}
	}
}
// }

// leftRightSeperatorSolo('2+4+6+8')
