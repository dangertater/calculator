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
	//gonna fuck it up.
	QUnit.test("5*7+3+5+5+5", function (assert) {
		assert.deepEqual(calculate("5*7+3+5+5+5"), {
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
