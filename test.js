QUnit.module("calculate", function () {
	QUnit.test("11+15", function (assert) {
		assert.deepEqual(calculate("11+15"), {
			leftSide: "11",
			rightSide: "15",
			action: "+",
		})
	})
	QUnit.test("12-159", function (assert) {
		assert.deepEqual(calculate("12-159"), {
			leftSide: "12",
			rightSide: "159",
			action: "-",
		})
	})
	QUnit.test("43*17", function (assert) {
		assert.deepEqual(calculate("43*17"), {
			leftSide: "43",
			rightSide: "17",
			action: "*",
		})
	})
	QUnit.test("5^3", function (assert) {
		assert.deepEqual(calculate("5^3"), {
			leftSide: "5",
			rightSide: "3",
			action: "^",
		})
	})
	QUnit.test("35/10", function (assert) {
		assert.deepEqual(calculate("35/10"), {
			leftSide: "35",
			rightSide: "10",
			action: "/",
		})
	})
	QUnit.test("5*7+3", function (assert) {
		assert.deepEqual(calculate("5*7+3"), {
			leftSide: {
				leftSide: "5",
				rightSide: "7",
				action: "*",
			},
			rightSide: "3",
			action: "+",
		})
	})
	QUnit.test("3", function (assert) {
		assert.deepEqual(calculate("3"), "3")
	})
})
QUnit.module("hasOperators", function () {
	QUnit.test("3", function (assert) {
		assert.false(hasOperators("3"))
	})
	QUnit.test("3+5", function (assert) {
		assert.true(hasOperators("3+5"))
	})
	QUnit.test("3^3", (assert) => {
		assert.true(hasOperators("3^3"))
	})
})

QUnit.module("sliceBoi", () => {
	QUnit.test("3+7", (assert) => {
		assert.equal(sliceBoi("3+7"), 1)
	})
	QUnit.test("7-3", (assert) => {
		assert.equal(sliceBoi("7-3"), 1)
	})
	QUnit.test("7*5", (assert) => {
		assert.equal(sliceBoi("7*5"), 1)
	})
	QUnit.test("15*3", (assert) => {
		assert.equal(sliceBoi("15*3"), 2)
	})
	QUnit.test("15/3", (assert) => {
		assert.equal(sliceBoi("15/3"), 2)
	})
	QUnit.test("3^3", (assert) => {
		assert.equal(sliceBoi("3^3"), 1)
	})
	QUnit.test("3+7/2", (assert) => {
		assert.equal(sliceBoi("3+7/2"), 3)
	})
	QUnit.test("3+7/2^2", (assert) => {
		assert.equal(sliceBoi("3+7/2^2"), 5)
	})
	QUnit.test("3+7/2^2*4+3-2", (assert) => {
		assert.equal(sliceBoi("3+7/2^2*4+3-2"), 5)
	})
})

// function equal(r1, r2) {
// 	if (r1 !== r2) {
// 		throw new Error("fuck you buddy")
// 	}
// }
