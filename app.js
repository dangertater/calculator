const input = document.getElementById("input")
const clearButton = document.getElementById("clearButton")
const buttonEquals = document.getElementById("buttonEquals")

let buttons = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"Add",
	"Subtract",
	"Dot",
	"Divide",
	"Multiply",
]

//new, deleted all of the the extra,deleted excess console logs, deleted extra input = get eleID,
buttons.forEach((b) => {
	let id = "button" + b
	let button = document.getElementById(id)
	button.addEventListener("click", (e) => {
		//in line below, sub in each indy element from buttons
		input.value = input.value + button.innerText
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
