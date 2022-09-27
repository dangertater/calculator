const input = document.getElementById("input")
const clearButton = document.getElementById("clearButton")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const button0 = document.getElementById("button0")
const buttonAdd = document.getElementById("buttonAdd")
const buttonSubtract = document.getElementById("buttonSubtract")
const buttonDot = document.getElementById("buttonDot")
const buttonDivide = document.getElementById("buttonDivide")
const buttonMultiply = document.getElementById("buttonMultiply")
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
	"Equals",
]
buttons.forEach((b) => {
	console.log("console logging b", b)
	let id = "button" + b
	console.log(id)
	let button = document.getElementById(id)
	console.log(button)
})

clearButton.addEventListener("click", (e) => {
	input.value = ""
	input.focus()
	console.log("clear")
})
button0.addEventListener("click", (e) => {
	input.value = input.value + "0"
})
button1.addEventListener("click", (e) => {
	input.value = input.value + "1"
	console.log("click button1")
})
button2.addEventListener("click", (e) => {
	input.value = input.value + "2"
	console.log("button 2 clicked")
})
button3.addEventListener("click", (e) => {
	input.value = input.value + "3"
	console.log("button 3 clicked")
})
button4.addEventListener("click", (e) => {
	input.value = input.value + "4"
	console.log("button 4 clicked")
})
button5.addEventListener("click", (e) => {
	input.value = input.value + "5"
	console.log("button 5 clicked")
})
button6.addEventListener("click", (e) => {
	input.value = input.value + "6"
	console.log("button 6 clicked")
})
button7.addEventListener("click", (e) => {
	input.value = input.value + "7"
	console.log("button 7 clicked")
})
button8.addEventListener("click", (e) => {
	input.value = input.value + "8"
	console.log("button 8 clicked")
})
button9.addEventListener("click", (e) => {
	input.value = input.value + "9"
	console.log("button 9 clicked")
})

buttonAdd.addEventListener("click", (e) => {
	input.value = input.value + "+"
	console.log("button + clicked")
})

buttonSubtract.addEventListener("click", (e) => {
	input.value = input.value + "-"
	console.log("button - clicked")
})

buttonDivide.addEventListener("click", (e) => {
	input.value = input.value + "/"
	console.log("button / clicked")
})

buttonMultiply.addEventListener("click", (e) => {
	input.value = input.value + "*"
	console.log("button * clicked")
})

buttonDot.addEventListener("click", (e) => {
	input.value = input.value + "."
	console.log("button . clicked")
})

buttonEquals.addEventListener("click", (e) => {
	input.value = eval(input.value)
	console.log("button = clicked")
})
