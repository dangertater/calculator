let testString = "0123456789"

let slice = (string, elementNumber) => {
	let leftOf = ""
	let rightOf = ""
	let baseElement = string[elementNumber]
	for (let i = 0; i < string.length; i++) {
		if (i < elementNumber) {
			leftOf = leftOf.concat(string[i])
		} else {
			rightOf = rightOf.concat(string[i])
		}
	}
	console.log(
		`left of baseElement is ` +
			leftOf +
			`, baseElement is ` +
			baseElement +
			" and right of baseElement is " +
			rightOf +
			"."
	)
}

slice(testString, 5)
//things eric would do
//all in one for loop