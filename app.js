let input = document.getElementById("input")
let clearButton = document.getElementById("clearButton")
console.log(input)

let green = false

setInterval(() => {
	if (!green) {
		green = true
		input.style.border = "1px solid green"
	} else {
		green = false
		input.style.border = "1px solid red"
	}
}, 1000)

//premade method below, some dude decdied that the string 'change' is going to determine when the callback, '(e)' in this case, should be called
input.addEventListener("change", (e) => {
	console.log("change", e)
})

input.addEventListener("keydown", (e) => {
	console.log("keyDownEvent", e.key, input.value)
})

clearButton.addEventListener("click", (e) => {
	input.value = ""
	input.focus()
	console.log("clear")
})
