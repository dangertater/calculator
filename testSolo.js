QUnit.module("numberCruncher", function () {
	QUnit.test("7", function (assert) {
		assert.equal(numberCruncher("7"), 7)
	})
	QUnit.test("7+7", function (assert) {
		assert.equal(
			numberCruncher({
				leftSideSolo: "7",
				rightSideSolo: "7",
				operatorsSolo: "+",
			}),
			14
		)
	})
	QUnit.test("7-5", function (assert) {
		assert.equal(
			numberCruncher({
				leftSideSolo: "7",
				rightSideSolo: "5",
				operatorsSolo: "-",
			}),
			2
		)
	})
	QUnit.test("7*5", function (assert) {
		assert.equal(
			numberCruncher({
				leftSideSolo: "7",
				rightSideSolo: "5",
				operatorsSolo: "*",
			}),
			35
		)
	})
	QUnit.test("10/5", (assert) => {
		assert.equal(
			numberCruncher({
				leftSideSolo: "10",
				rightSideSolo: "5",
				operatorsSolo: "/",
			}),
			2
		)
	})
	QUnit.test("2^2", (assert) => {
		assert.equal(
			numberCruncher({
				leftSideSolo: "2",
				rightSideSolo: "2",
				operatorsSolo: "^",
			}),
			4
		)
	})
	QUnit.test("2+4*6^8-4", (assert) => {
		assert.equal(
			numberCruncher({
				leftSideSolo: "2",
				rightSideSolo: {
					leftSideSolo: {
						leftSideSolo: "4",
						rightSideSolo: {
							leftSideSolo: "6",
							rightSideSolo: "8",
							operatorsSolo: "^",
						},
						operatorsSolo: "*",
					},
					rightSideSolo: "4",
					operatorsSolo: "-",
				},
				operatorsSolo: "+",
			}),
			6718462
		)
	})
})
