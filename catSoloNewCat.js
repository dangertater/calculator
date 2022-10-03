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
	for (let i = 0; i < stringSolo.length; i++) {
		for (let i = 0; i < stringSolo.length; i++) {
			if (stringSolo[i] === "+" || stringSolo[i] === "-") {
				rightSideSolo = stringSolo.slice(stringSolo[i])
				leftSideSolo = stringSolo.slice(stringSolo[0], stringSolo[i - 1])
				operatorsSolo = stringSolo.slice(stringSolo[0], stringSolo[i + 1])
				return { leftSideSolo, rightSideSolo, operatorsSolo }
			}
		}
		for (let i = 0; i < stringSolo.length; i++) {
			if (stringSolo[i] === "+" || stringSolo[i] === "-") {
				rightSideSolo = stringSolo.slice(stringSolo[i])
				leftSideSolo = stringSolo.slice(stringSolo[0], stringSolo[i - 1])
				operatorsSolo = stringSolo.slice(stringSolo[0], stringSolo[i + 1])
				return { leftSideSolo, rightSideSolo, operatorsSolo }
			}
		}
		for (let i = 0; i < stringSolo.length; i++) {
			if (stringSolo[i] === "+" || stringSolo[i] === "-") {
				rightSideSolo = stringSolo.slice(stringSolo[i])
				leftSideSolo = stringSolo.slice(stringSolo[0], stringSolo[i - 1])
				operatorsSolo = stringSolo.slice(stringSolo[0], stringSolo[i + 1])
				return { leftSideSolo, rightSideSolo, operatorsSolo }
			}
		}
	}
}
