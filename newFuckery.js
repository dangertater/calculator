let testString = "0123456789"

let slice = (string, elementNumber) => {
	let leftOf = ""
	let rightOf = ""
	let baseElement = string[elementNumber]
	for (let i = 0; i < elementNumber; i++) {
		leftOf = leftOf.concat(string[i])
	}
	for (let i = 0; i < string.length - elementNumber; i++) {
		rightOf = rightOf.concat(string[i + elementNumber])
	}
	console.log(
		`left of element is ` +
			leftOf +
			`, baseElement is ` +
			baseElement +
			" and right of baseElement is " +
			rightOf
	)
}

slice(testString, 5)
//things eric would do
//all in one for loop
