const input = document.getElementById("input")
const clearButton = document.getElementById("clearButton")
const buttonEquals = document.getElementById("buttonEquals")
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let actions = ["Add", "Subtract", "Dot", "Divide", "Multiply"]
let buttons = [...numbers, ...actions]
buttons.forEach((b) => {
	let id = "button" + b
	let button = document.getElementById(id)
	button.addEventListener("click", (e) => {
		if (actions.includes(b)) {
			let lastValue = input.value[input.value.length - 1]
			if (numbers.includes(lastValue)) {
				input.value = input.value + button.innerText
			}
		} else {
			input.value = input.value + button.innerText
		}
	})
})

clearButton.addEventListener("click", (e) => {
	input.value = ""
	input.focus()
	console.log("clear")
})
buttonEquals.addEventListener("click", (e) => {
	input.value = eval(input.value)
	console.log("button = clicked")
})

//steps since finish point 1
//add validation for buttons
//
console.log("numbers", numbers)
console.log("actions", actions)
console.log("buttons", buttons)

//asdfasdfadsf
