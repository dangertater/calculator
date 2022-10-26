//will need const's connecting html to the JS (document.getelementID ('variable name'))
const input = document.getElementById("input")
const equals = document.getElementById("buttonEquals")
const clear = document.getElementById("buttonClear")
//will need arrays for actions, numbers, and both combined into another array 'buttons'
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let actions = ["Add", "Subtract", "Multiply", "Divide", "Dot"]
let buttons = [...numbers, ...actions]

//will need a function that will cycle through (.forEach) each element in array 'buttons',
//----then will do an '.addEventListener' comparing if actions array includes each cycled element, then comparing if numbers
//----array includes the cycled element. and then pushing the element if in numbers (prevents actions occuring in succession)
//----bonus, figure out how to have it delete the last element if the last element is an 'action' (will make code non functional)

buttons.forEach((bName) => {
	let id = "button" + bName
	let button = document.getElementById(id)
	button.addEventListener("click", (e) => {
		if (actions.includes(bName)) {
			let lastValue = input.value[input.value.length - 1]
			if (numbers.includes(lastValue)) {
				input.value = input.value + button.innerText
			}
		} else {
			input.value = input.value + button.innerText
		}
	})
})

//both clear and equals will need their own event code for when user clicks
//q4e - here we are not shouting into the void because the input.value will update the user's screen which is the goal
//----no return necessary. is this correct thinking? eric says yes
clear.addEventListener("click", (e) => {
	input.value = ""
	input.focus()
})
//will return the string into executable code,
//q4e - we are not shouting into the void because 'eval' intrinsically will execute code elsewhere, is that correct? yes cool
equals.addEventListener("click", (e) => {
	input.value = eval(input.value)
})
//event listener/addlistener question
//----fancy would be not getlementbyID, isntead use document.querySelectorAll (returning array of all things matching selector),
//----then use same non inline function thend etermine which button clicked based on teh information in the event

let testString = "0123456789"

let slice = (string, elementNumber) => {
	let workAroundVariable = ""
	let workAroundVariable2 = ""
	let leftOf = ""
	let rightOf = ""
	let baseElement = string[elementNumber]
	for (let i = 0; i < string[elementNumber]; i++) {
		workAroundVariable = workAroundVariable.concat(string[i])
		leftOf = workAroundVariable + string[i]
	}
	for (let i = 0; i < string.length - elementNumber; i++) {
		workAroundVariable2 = workAroundVariable2.concat(string[i + elementNumber])
		rightOf = workAroundVariable2 + string[i]
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
